import React from "react";

export default function AboutMe() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-6">👋 About Me</h2>

      <p className="text-lg mb-4">
        Hi, I'm <span className="font-semibold">Tom</span> — a passionate
        Software Engineer currently working as a{" "}
        <span className="font-semibold">Senior Data Engineer</span> at{" "}
        <span className="font-semibold">Optum UK</span> (formerly EMIS) within
        their Data & Analytics department.
      </p>

      <p className="text-lg mb-4">
        With a background in{" "}
        <span className="font-semibold">data engineering</span>,{" "}
        <span className="font-semibold">analytics</span>, and{" "}
        <span className="font-semibold">technical leadership</span>, I'm deeply
        interested in how data can drive better decisions, products, and
        outcomes. I love turning raw data into meaningful insights and building
        scalable, efficient pipelines to make it happen. 🚀
      </p>

      <p className="text-lg mb-6">
        Outside of work, you’ll find me tinkering with side projects, learning
        new tech, and probably obsessing over a new productivity tool. 😅
      </p>

      <h3 className="text-2xl font-semibold mb-4 mt-10">
        🛠️ Tech Stack & Tools
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-base list-disc list-inside">
        <li>
          <strong>Languages:</strong> Python 🐍, SQL 🧮, JavaScript, C#
        </li>
        <li>
          <strong>Data:</strong> Trino ⚡, Snowflake ❄️, SQLMesh, Airflow
        </li>
        <li>
          <strong>Cloud:</strong> Azure ☁️, AWS 🌩️, GCP (a bit)
        </li>
        <li>
          <strong>Other:</strong> Git, Docker 🐳, CI/CD, Agile/Scrum, Jupyter
        </li>
      </ul>

      <p className="text-lg mt-8">
        Looking to connect with forward-thinking teams, share knowledge, or
        explore exciting new challenges. 👨‍💻
        <br />
        <span className="mt-2 block">Feel free to reach out!</span>
      </p>
    </section>
  );
}
