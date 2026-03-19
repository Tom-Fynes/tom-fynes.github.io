import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { useColorMode } from "@docusaurus/theme-common";
import { ArrowRight } from "lucide-react";
import { PIPELINES } from "../../data/pipelines/index";

export default function PipelinesGallery() {
  return (
    <Layout
      title="Data Pipeline Architectures"
      description="Interactive visualizations of real-world data engineering patterns"
    >
      <PipelinesGalleryInner />
    </Layout>
  );
}

function PipelinesGalleryInner() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 1.5rem 4rem" }}>
      {/* Hero */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "2.4rem", fontWeight: 800, marginBottom: "0.75rem" }}>
          Data Pipeline Architectures
        </h1>
        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--ifm-color-emphasis-600)",
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          Interactive visualizations of real-world data engineering patterns
        </p>
      </div>

      {/* Card Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {PIPELINES.map((pipeline) => (
          <PipelineCard key={pipeline.id} pipeline={pipeline} isDark={isDark} />
        ))}
      </div>
    </main>
  );
}

function PipelineCard({
  pipeline,
  isDark,
}: {
  pipeline: (typeof PIPELINES)[0];
  isDark: boolean;
}) {
  const complexityColor = pipeline.complexity === "Advanced" ? "#dc2626" : "#d97706";
  const complexityBg =
    pipeline.complexity === "Advanced"
      ? isDark
        ? "#3f0000"
        : "#fef2f2"
      : isDark
      ? "#3f2000"
      : "#fffbeb";

  return (
    <Link to={pipeline.route} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        style={{
          border: "1px solid var(--ifm-color-emphasis-300)",
          borderRadius: 12,
          padding: "1.5rem",
          background: "var(--ifm-background-color)",
          transition: "transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease",
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.12)";
          (e.currentTarget as HTMLDivElement).style.borderColor = "var(--ifm-color-primary)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
          (e.currentTarget as HTMLDivElement).style.borderColor =
            "var(--ifm-color-emphasis-300)";
        }}
      >
        {/* Title + complexity badge */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "0.5rem",
          }}
        >
          <h2 style={{ fontSize: "1.15rem", fontWeight: 700, margin: 0 }}>{pipeline.title}</h2>
          <span
            style={{
              flexShrink: 0,
              padding: "2px 10px",
              borderRadius: 10,
              fontSize: "0.72rem",
              fontWeight: 700,
              background: complexityBg,
              color: complexityColor,
              border: `1px solid ${complexityColor}`,
              marginTop: 2,
            }}
          >
            {pipeline.complexity}
          </span>
        </div>

        {/* Description */}
        <p
          style={{
            margin: 0,
            fontSize: "0.88rem",
            color: "var(--ifm-color-emphasis-700)",
            lineHeight: 1.6,
          }}
        >
          {pipeline.shortDescription}
        </p>

        {/* Tech stack tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
          {pipeline.techStack.map((tech) => (
            <span
              key={tech}
              style={{
                padding: "2px 9px",
                borderRadius: 6,
                fontSize: "0.72rem",
                fontWeight: 600,
                background: isDark ? "#1e293b" : "#f1f5f9",
                color: "var(--ifm-font-color-base)",
                border: "1px solid var(--ifm-color-emphasis-200)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "auto", paddingTop: "0.5rem" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.3rem",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "var(--ifm-color-primary)",
            }}
          >
            View Pipeline <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
