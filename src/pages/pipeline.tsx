/**
 * Interactive Data Pipeline Visualizer — src/pages/pipeline.tsx
 *
 * Required packages (install once):
 *   npm install @xyflow/react @dagrejs/dagre lucide-react
 *
 * Dagre is used for automatic left-to-right layout.
 * React Flow (@xyflow/react) renders the interactive graph.
 * lucide-react provides toolbar icons.
 */

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Layout from "@theme/Layout";
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  useReactFlow,
  type Node,
  type Edge,
  type NodeMouseHandler,
} from "@xyflow/react";
import dagre from "@dagrejs/dagre";
import { RefreshCw, X } from "lucide-react";

import PipelineNode from "../components/PipelineNode";
import {
  pipelineNodes,
  pipelineEdges,
  LAYER_COLORS,
  type PipelineNodeData,
  type LayerType,
} from "../data/pipelineData";

import "@xyflow/react/dist/style.css";

// ── Dagre auto-layout ────────────────────────────────────────────────────────

const NODE_WIDTH = 180;
const NODE_HEIGHT = 70;

function getLayoutedElements(
  nodes: Node<PipelineNodeData>[],
  edges: Edge[],
): { nodes: Node<PipelineNodeData>[]; edges: Edge[] } {
  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: "LR", nodesep: 50, ranksep: 80, marginx: 30, marginy: 30 });

  nodes.forEach((node) => g.setNode(node.id, { width: NODE_WIDTH, height: NODE_HEIGHT }));
  edges.forEach((edge) => g.setEdge(edge.source, edge.target));

  dagre.layout(g);

  const layoutedNodes = nodes.map((node) => {
    const { x, y } = g.node(node.id);
    return {
      ...node,
      position: { x: x - NODE_WIDTH / 2, y: y - NODE_HEIGHT / 2 },
    };
  });

  return { nodes: layoutedNodes, edges };
}

// ── Convert raw data to React Flow objects ────────────────────────────────────

const rawNodes: Node<PipelineNodeData>[] = pipelineNodes.map((n) => ({
  id: n.id,
  type: "pipelineNode",
  position: n.position,
  data: n.data,
}));

const rawEdges: Edge[] = pipelineEdges.map((e) => ({
  id: e.id,
  source: e.source,
  target: e.target,
  animated: e.animated ?? true,
  type: e.type ?? "smoothstep",
  style: { strokeWidth: 2, stroke: "#94a3b8" },
}));

const { nodes: initialNodes, edges: initialEdges } = getLayoutedElements(rawNodes, rawEdges);

// ── Layer legend ──────────────────────────────────────────────────────────────

const LAYERS: { key: LayerType; label: string }[] = [
  { key: "source", label: "Sources" },
  { key: "ingestion", label: "Ingestion" },
  { key: "storage", label: "Storage" },
  { key: "serving", label: "Serving" },
];

// ── Detail Panel ──────────────────────────────────────────────────────────────

interface DetailPanelProps {
  node: Node<PipelineNodeData> | null;
  onClose: () => void;
}

function DetailPanel({ node, onClose }: DetailPanelProps) {
  if (!node) return null;
  const { data } = node;
  const borderColor = LAYER_COLORS[data.layer];

  return (
    <div
      className="pipeline-detail-panel"
      style={{ borderLeftColor: borderColor }}
    >
      <button
        className="pipeline-detail-panel__close"
        onClick={onClose}
        aria-label="Close detail panel"
      >
        <X size={16} />
      </button>
      <div className="pipeline-detail-panel__header">
        <span className="pipeline-detail-panel__icon" role="img" aria-label={data.label}>
          {data.icon}
        </span>
        <div>
          <h3 className="pipeline-detail-panel__title">{data.detail.tool}</h3>
          <span
            className="pipeline-detail-panel__badge"
            style={{ background: borderColor }}
          >
            {data.layer}
          </span>
        </div>
      </div>
      <div className="pipeline-detail-panel__section">
        <h4>Purpose</h4>
        <p>{data.detail.purpose}</p>
      </div>
      <div className="pipeline-detail-panel__section">
        <h4>⚠ Real-world consideration</h4>
        <p>{data.detail.consideration}</p>
      </div>
    </div>
  );
}

// ── Mobile static summary table ───────────────────────────────────────────────

function MobileSummary() {
  return (
    <div className="pipeline-mobile">
      <h2>Data Pipeline Architecture</h2>
      <p className="pipeline-mobile__subtitle">
        An interactive visualizer is available on desktop. Here's a summary of each stage:
      </p>
      <div className="pipeline-mobile__table-wrap">
        <table className="pipeline-mobile__table">
          <thead>
            <tr>
              <th>Layer</th>
              <th>Component</th>
              <th>Tool / Tech</th>
            </tr>
          </thead>
          <tbody>
            {pipelineNodes.map((n) => (
              <tr key={n.id}>
                <td>
                  <span
                    className="pipeline-mobile__badge"
                    style={{ background: LAYER_COLORS[n.data.layer] }}
                  >
                    {n.data.layer}
                  </span>
                </td>
                <td>{n.data.label}</td>
                <td>{n.data.detail.tool}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Inner canvas component (needs ReactFlowProvider context) ──────────────────

function PipelineCanvas() {
  const [nodes, _setNodes, onNodesChange] = useNodesState<Node<PipelineNodeData>>(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState<Node<PipelineNodeData> | null>(null);
  const { fitView } = useReactFlow();

  const nodeTypes = useMemo(() => ({ pipelineNode: PipelineNode }), []);

  const onNodeClick: NodeMouseHandler<Node<PipelineNodeData>> = useCallback((_evt, node) => {
    setSelectedNode(node);
  }, []);

  const onPaneClick = useCallback(() => setSelectedNode(null), []);

  const handleReset = useCallback(() => {
    fitView({ padding: 0.15, duration: 500 });
  }, [fitView]);

  return (
    <div className="pipeline-canvas-wrap">
      {/* Toolbar */}
      <div className="pipeline-toolbar">
        <button className="pipeline-toolbar__btn" onClick={handleReset} title="Reset view">
          <RefreshCw size={15} />
          Reset View
        </button>

        {/* Layer legend */}
        <div className="pipeline-toolbar__legend">
          {LAYERS.map(({ key, label }) => (
            <span key={key} className="pipeline-toolbar__legend-item">
              <span
                className="pipeline-toolbar__legend-dot"
                style={{ background: LAYER_COLORS[key] }}
              />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* React Flow canvas */}
      <div className="pipeline-flow-area">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          onPaneClick={onPaneClick}
          fitView
          fitViewOptions={{ padding: 0.15 }}
          minZoom={0.3}
          maxZoom={2}
          proOptions={{ hideAttribution: false }}
        >
          <Background gap={20} size={1} color="var(--pipeline-bg-dot)" />
          <Controls />
          <MiniMap
            nodeColor={(n) => {
              const d = n.data as PipelineNodeData;
              return d ? LAYER_COLORS[d.layer] : "#94a3b8";
            }}
            maskColor="var(--pipeline-minimap-mask)"
          />
        </ReactFlow>

        <DetailPanel node={selectedNode} onClose={() => setSelectedNode(null)} />
      </div>
    </div>
  );
}

// ── Page wrapper ──────────────────────────────────────────────────────────────

export default function PipelinePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <Layout
      title="Data Pipeline Visualizer"
      description="Interactive lakehouse data pipeline visualizer built with React Flow"
    >
      <main className="pipeline-page">
        <div className="pipeline-header">
          <h1 className="pipeline-header__title">Data Pipeline Visualizer</h1>
          <p className="pipeline-header__subtitle">
            A modern lakehouse architecture — click any node to learn more about the technology and trade-offs.
          </p>
        </div>

        {isMobile ? (
          <MobileSummary />
        ) : (
          <ReactFlowProvider>
            <PipelineCanvas />
          </ReactFlowProvider>
        )}
      </main>
    </Layout>
  );
}
