import React from "react";
import Layout from "@theme/Layout";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Python",
    img: "img/python.png",
    color: "bg-green-100 text-green-500",
    description:
      "Using as the main language for professional development. Effective in writing scalable, testable, and maintainable code.",
  },
  {
    title: "SQL Server",
    img: "img/sql_server.png",
    color: "bg-blue-100 text-blue-500",
    description:
      "Proficient in all areas of SQL Server development & administration; performance tuning, indexing, backups, and restores.",
  },
  {
    title: "AWS",
    img: "img/aws.png",
    color: "bg-orange-100 text-orange-500",
    description:
      "Certified cloud practitioner with experience working with AWS on enterprise projects.",
  },
  {
    title: "Trino",
    img: "img/trino.png",
    color: "bg-purple-100 text-purple-500",
    description:
      "Experienced in creating and tuning Presto SQL statements for large-scale data analysis.",
  },
  {
    title: "Git & GitHub",
    img: "img/Git.png",
    color: "bg-red-100 text-red-500",
    description:
      "Skilled in Git and GitHub CLI with the ability to maintain repository source control effectively.",
  },
  {
    title: "SSRS",
    img: "img/sql_server.png",
    color: "bg-yellow-100 text-yellow-500",
    description:
      "Competent in deploying, creating, and supporting SSRS reports along with maintaining and installing the product.",
  },
  {
    title: "PowerShell",
    img: "img/powershell.png",
    color: "bg-indigo-100 text-indigo-500",
    description:
      "Proficient in writing supportable and testable PowerShell scripts for automation and system tasks.",
  },
  {
    title: "C#",
    img: "img/csharp.png",
    color: "bg-pink-100 text-pink-500",
    description:
      "Previous experience with Windows Forms and WPF development, along with C# scripting.",
  },
  {
    title: "SSIS",
    img: "img/sql_server.png",
    color: "bg-teal-100 text-teal-500",
    description:
      "Skilled in creating, deploying, and maintaining SSIS packages for ETL processes.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function SkillsMain() {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Skills</h1>
          <p className="text-base leading-relaxed max-w-2xl mx-auto">
            Here's a snapshot of the tools and technologies I work with
            regularly.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500"></div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 md:w-1/3 w-full">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="relative bg-gray-800 rounded-lg p-6 h-full flex flex-col justify-between transform translate-x-3 -translate-y-3 shadow-lg hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 mb-4 inline-flex items-center justify-center rounded-full ${skill.color} flex-shrink-0`}
                >
                  <img
                    src={skill.img}
                    alt={skill.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-white text-xl font-medium mb-2">
                    {skill.title}
                  </h2>
                  <p className="leading-relaxed text-sm text-gray-300 text-justify">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
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
