import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import { ArrowRight } from "lucide-react";
import { FadeInOnScroll } from "@site/src/components/animations";
import { PIPELINES } from "../../data/pipelines/index";
import styles from "./pipelines.module.css";

export default function PipelinesGallery() {
  return (
    <Layout
      title="Data Pipeline Architectures"
      description="Interactive visualizations of real-world data engineering patterns"
    >
      <main>
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            {/* Header */}
            <FadeInOnScroll direction="up" delay={0}>
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                  Data Pipeline Architectures
                </h1>
                <p className="text-base leading-relaxed max-w-2xl mx-auto opacity-70">
                  Interactive visualizations of real-world data engineering patterns
                </p>
                <div className="mt-6 flex justify-center">
                  <div
                    className="w-16 h-1 rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #DD7596, #B7C3F3)",
                    }}
                  />
                </div>
              </div>
            </FadeInOnScroll>

            {/* Pipeline Cards */}
            <div className={styles.sectionsContainer}>
              {PIPELINES.map((pipeline, index) => (
                <FadeInOnScroll key={pipeline.id} direction="up" delay={index * 100}>
                  <PipelineCard pipeline={pipeline} />
                </FadeInOnScroll>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

function PipelineCard({ pipeline }: { pipeline: (typeof PIPELINES)[0] }) {
  const complexityColor = pipeline.complexity === "Advanced" ? "#dc2626" : "#d97706";

  return (
    <Link to={pipeline.route} className={styles.cardLink}>
      <div
        className={styles.card}
        style={{ "--accent-color": pipeline.accentColor } as React.CSSProperties}
      >
        {/* Header row: emoji + title/description + complexity badge */}
        <div className={styles.cardHeader}>
          <div className={styles.cardTitleGroup}>
            <span className={styles.cardEmoji}>{pipeline.emoji}</span>
            <div>
              <h2 className={styles.cardTitle}>{pipeline.title}</h2>
              <p className={styles.cardDescription}>{pipeline.shortDescription}</p>
            </div>
          </div>
          <span
            className={styles.complexityBadge}
            style={{ color: complexityColor, borderColor: complexityColor }}
          >
            {pipeline.complexity}
          </span>
        </div>

        {/* Tech stack chips */}
        <div className={styles.techStack}>
          {pipeline.techStack.map((tech) => (
            <span key={tech} className={styles.techChip}>
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <span className={styles.ctaText}>
            View Pipeline <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}

