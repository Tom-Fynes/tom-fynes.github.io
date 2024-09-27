import React from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

function SkillsMain() {
  return (
    <Heading as="h1" className="center">
      <div
        className="fixed-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <h2 className="h2">Skills</h2>
        <div className="container">
          <div class="card-grid">
            <div class="card">
              <div class="card-head">
                <img src="img/python.png" class="image-style" />
                <div class="card-title">
                  <h3>Python</h3>
                </div>
              </div>
              <div class="card-content">
                <p>
                  Using as the main language for professional development.
                  effective in writing scalable, testable, and maintainable
                  code.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-head">
                <img src="img/sql_server.png" class="image-style" />
              </div>
              <div class="card-title">
                <h3>SQL Server</h3>
              </div>
              <div class="card-content">
                <p>
                  Proficient in all areas for SQL Server database development &
                  administration; performance tuning, indexing beack up and
                  retores etc.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-head">
                <img src="img/aws.png" class="image-style" />
                <div class="card-title">
                  <h3>AWS</h3>
                </div>
              </div>
              <div class="card-content">
                <p>
                  Certified cloud practitinor with experience working with AWS
                  on enterprise projects.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-head">
                <img src="img/trino.png" class="image-style" />
                <div class="card-title">
                  <h3>Trino</h3>
                </div>
              </div>
              <div class="card-content">
                <p>Experienced in creating and tuning presto sql statements.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-head">
                <img src="img/Git.png" class="image-style" />
                <div class="card-title">
                  <h3>Git</h3>
                </div>
              </div>
              <div class="card-content">
                <p>
                  Skilled in git and github CLI with the ability to maintain
                  repository source control.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-head">
                <img src="img/sql_server.png" class="image-style" />
                <div class="card-title">
                  <h3>SSRS</h3>
                </div>
              </div>
              <div class="card-content">
                <p>
                  Competent in deploying, creating and suporting SSRS reports
                  along with maintaining and installing the product.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-head">
                <img src="img/powershell.png" class="image-style" />
                <div class="card-title">
                  <h3>Powershell</h3>
                </div>
              </div>
              <div class="card-content">
                <p>
                  Proficient in writing supportable and testable powershell
                  scripts.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-head">
                <img src="img/csharp.png" class="image-style" />
                <div class="card-title">
                  <h3>C#</h3>
                </div>
              </div>
              <div class="card-content">
                <p>
                  Previous experiance with Windows forms and WPF development,
                  along with C# scripting.
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-head">
                <img src="img/sql_server.png" class="image-style" />
                <div class="card-title">
                  <h3>SSIS</h3>
                </div>
              </div>
              <div class="card-content">
                <p>Skilled in creating and maintaining SSIS packages.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Heading>
  );
}

export default function skills() {
  return (
    <Layout title="Skills" description="Tom F Skills">
      <main>
        <SkillsMain />
      </main>
    </Layout>
  );
}
