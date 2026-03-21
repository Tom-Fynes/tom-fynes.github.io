import React from "react";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";
import SkillCard from "../components/SkillCard";
import cardStyles from "../components/SkillCard/SkillCard.module.css";

const skills = [
  {
    title: "Python",
    img: "img/python.png",
    gradient:
      "radial-gradient(circle at 100% 107%, #fff3c4 0%, #c5dff8 45%, #a8cef5 100%)",
    description:
      "Using as the main language for professional development. Effective in writing scalable, testable, and maintainable code.",
  },
  {
    title: "SQL Server",
    img: "img/sql_server.png",
    gradient:
      "radial-gradient(circle at 100% 107%, #dcd6f7 0%, #c5b8f5 50%, #d4d9fa 100%)",
    description:
      "Proficient in all areas of SQL Server development & administration; performance tuning, indexing, backups, and restores.",
  },
  {
    title: "AWS",
    img: "img/aws.png",
    gradient:
      "radial-gradient(circle at 100% 107%, #fde8c8 0%, #f5c6a0 50%, #f0a882 100%)",
    description:
      "Certified cloud practitioner with experience working with AWS on enterprise projects.",
  },
  {
    title: "Trino",
    img: "img/trino.png",
    gradient:
      "radial-gradient(circle at 100% 107%, #ffd6e7 0%, #dcd6f7 50%, #c5b8f5 100%)",
    description:
      "Experienced in creating and tuning Presto SQL statements for large-scale data analysis.",
  },
  {
    title: "Git & GitHub",
    img: "img/Git.png",
    gradient:
      "radial-gradient(circle at 100% 107%, #ffd6e7 0%, #f5b8d0 50%, #e8a0bc 100%)",
    description:
      "Skilled in Git and GitHub CLI with the ability to maintain repository source control effectively.",
  },
  {
    title: "SSRS",
    textBadge: "SSRS",
    gradient:
      "radial-gradient(circle at 100% 107%, #fde8c8 0%, #fdd5a8 40%, #f5c6a0 100%)",
    description:
      "Competent in deploying, creating, and supporting SSRS reports along with maintaining and installing the product.",
  },
  {
    title: "PowerShell",
    img: "img/powershell.png",
    gradient:
      "radial-gradient(circle at 100% 107%, #c5dff8 0%, #a8cef5 50%, #c5b8f5 100%)",
    description:
      "Proficient in writing supportable and testable PowerShell scripts for automation and system tasks.",
  },
  {
    title: "C#",
    img: "img/csharp.png",
    gradient:
      "radial-gradient(circle at 100% 107%, #ffd6e7 0%, #fde8c8 40%, #f5c6a0 100%)",
    description:
      "Previous experience with Windows Forms and WPF development, along with C# scripting.",
  },
  {
    title: "SSIS",
    textBadge: "SSIS",
    gradient:
      "radial-gradient(circle at 100% 107%, #c5f0e8 0%, #b0e8d8 50%, #98ddc8 100%)",
    description:
      "Skilled in creating, deploying, and maintaining SSIS packages for ETL processes.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

function SkillsMain() {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Skills</h1>
          <p className="text-base leading-relaxed max-w-2xl mx-auto">
            Here's a snapshot of the tools and technologies I work with regularly.
          </p>
          <p className="text-sm mt-2 opacity-50">Hover a card to learn more.</p>
          <div className="mt-6 flex justify-center">
            <div
              className="w-16 h-1 rounded-full"
              style={{ background: "linear-gradient(90deg, #DD7596, #B7C3F3)" }}
            />
          </div>
        </div>

        {/* Cards grid */}
        <motion.div
          className={cardStyles.grid}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {skills.map((skill) => (
            <motion.div key={skill.title} variants={cardVariants}>
              <SkillCard
                title={skill.title}
                img={skill.img}
                textBadge={skill.textBadge}
                description={skill.description}
                gradient={skill.gradient}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <Layout title="Skills" description="Tom F Skills">
      <main>
        <SkillsMain />
      </main>
    </Layout>
  );
}

