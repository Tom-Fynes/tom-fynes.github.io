import React, { useState } from "react";
import Layout from "@theme/Layout";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./skills.module.css";

const categories = [
  {
    id: "data-engineering",
    title: "Data Engineering",
    emoji: "⚡",
    accentColor: "#DD7596",
    description: "Building scalable pipelines, architectures and cloud infrastructure",
    skills: [
      { label: "Python", img: "img/python.png" },
      { label: "SQL" },
      { label: "Spark" },
      { label: "Airflow" },
      { label: "Snowflake" },
      { label: "AWS", img: "img/aws.png" },
      { label: "Azure" },
      { label: "GCP" },
      { label: "Data Modeling" },
      { label: "Data Governance" },
      { label: "Data Quality" },
      { label: "ETL" },
      { label: "Data Architecture" },
      { label: "CI/CD" },
    ],
  },
  {
    id: "software-development",
    title: "Software Development",
    emoji: "💻",
    accentColor: "#B7C3F3",
    description: "Crafting robust applications with modern development practices",
    skills: [
      { label: "C#", img: "img/csharp.png" },
      { label: ".NET (WinForms, WPF, ASP.NET)" },
      { label: "GIT", img: "img/Git.png" },
      { label: "Terraform", img: "img/TF_logo.png" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    emoji: "🗄️",
    accentColor: "#AED6F1",
    description: "Designing and optimising relational and analytical database systems",
    skills: [
      { label: "Microsoft SQL Server", img: "img/sql_server.png" },
      { label: "Snowflake" },
      { label: "Trino", img: "img/trino.png" },
      { label: "Postgres" },
      { label: "MySQL" },
    ],
  },
  {
    id: "other",
    title: "Other",
    emoji: "🌟",
    accentColor: "#ECDA90",
    description: "Professional competencies that complement the technical toolkit",
    skills: [
      { label: "Problem-solving" },
      { label: "Team Leadership" },
      { label: "Communication (Written & Verbal)" },
      { label: "Collaboration" },
      { label: "Technical Documentation" },
    ],
  },
];

const contentVariants = {
  collapsed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  expanded: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.35, ease: "easeInOut" },
  },
};

function CategorySection({ category, isOpen, onToggle, index }) {
  return (
    <div
      className={styles.section}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <button
        className={styles.sectionHeader}
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{ "--accent-color": category.accentColor }}
      >
        <div className={styles.sectionHeaderLeft}>
          <span className={styles.sectionEmoji}>{category.emoji}</span>
          <div className={styles.sectionTitleGroup}>
            <h2 className={styles.sectionTitle}>{category.title}</h2>
            <p className={styles.sectionDescription}>{category.description}</p>
          </div>
        </div>
        <div className={styles.sectionHeaderRight}>
          <span className={styles.skillCount}>{category.skills.length} skills</span>
          <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}>
            ▾
          </span>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="expanded"
            exit="collapsed"
            variants={contentVariants}
            className={styles.sectionContent}
          >
            <div className={styles.skillsGrid}>
              {category.skills.map((skill) => (
                <div key={skill.label} className={styles.skillChip}>
                  {skill.img && (
                    <img
                      src={skill.img}
                      alt={skill.label}
                      className={styles.chipIcon}
                    />
                  )}
                  <span>{skill.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Skills() {
  const [openSections, setOpenSections] = useState(
    categories.reduce((acc, cat) => ({ ...acc, [cat.id]: true }), {})
  );

  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Layout title="Skills" description="Tom Fynes – Skills & Technologies">
      <main>
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Skills</h1>
              <p className="text-base leading-relaxed max-w-2xl mx-auto opacity-70">
                A snapshot of the tools, technologies and competencies that make up
                my professional toolkit.
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

            {/* Accordion sections */}
            <div className={styles.sectionsContainer}>
              {categories.map((category, index) => (
                <CategorySection
                  key={category.id}
                  category={category}
                  isOpen={openSections[category.id]}
                  onToggle={() => toggleSection(category.id)}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

