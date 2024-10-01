import React from "react";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import Card from "@site/src/components/Card";
import CardBody from "@site/src/components/Card/CardBody";
import CardHeader from "@site/src/components/Card/CardHeader";
import CardImage from "@site/src/components/Card/CardImage";
import Columns from "@site/src/components/Columns";
import Column from "@site/src/components/Column";



function SkillsMain() {
  return (
    <Heading as="h1" className="center">
      <h2>Skills</h2>
      <div className="container">
        <Columns>
          <Column>
            <Card className="card">
              <CardHeader>
                <CardImage
                  cardImageUrl="img/python.png"
                  className="avatar__photo center image-style"
                />
              </CardHeader>
              <CardBody className="card-content">
                Using as the main language for professional development.
                effective in writing scalable, testable, and maintainable code.
              </CardBody>
            </Card>
            <br />
          </Column>
          <Column className="text--center">
            <Card>
              <CardHeader>
                <CardImage
                  cardImageUrl="img/sql_server.png"
                  className="avatar__photo center image-style"
                />
              </CardHeader>
              <CardBody className="card-content">
                Proficient in all areas for SQL Server database development &
                administration; performance tuning, indexing beack up and
                retores etc.
              </CardBody>
            </Card>
            <br />
          </Column>
          <Column>
            <Card className="card">
              <CardHeader>
                <CardImage
                  cardImageUrl="img/aws.png"
                  className="avatar__photo center image-style"
                />
              </CardHeader>
              <CardBody className="card-content">
                Certified cloud practitinor with experience working with AWS on
                enterprise projects.
              </CardBody>
            </Card>
            <br />
          </Column>
        </Columns>
        <Columns>
          <Column>
            <Card className="card">
              <CardHeader>
                <CardImage
                  cardImageUrl="img/trino.png"
                  className="avatar__photo center image-style"
                />
              </CardHeader>
              <CardBody className="card-content">
                Experienced in creating and tuning presto sql statements.
              </CardBody>
            </Card>
            <br />
          </Column>
          <Column className="text--center">
            <Card>
              <CardHeader>
                <CardImage
                  cardImageUrl="img/Git.png"
                  className="avatar__photo center image-style"
                />
              </CardHeader>
              <CardBody className="card-content">
                Skilled in git and github CLI with the ability to maintain
                repository source control.
              </CardBody>
            </Card>
            <br />
          </Column>
          <Column>
            <Card className="card">
              <CardHeader>
                <CardImage
                  cardImageUrl="img/sql_server.png"
                  className="avatar__photo center image-style"
                />
              </CardHeader>
              <CardBody className="card-content">
                Competent in deploying, creating and suporting SSRS reports
                along with maintaining and installing the product.
              </CardBody>
            </Card>
            <br />
          </Column>
        </Columns>
        <Columns>
          <Column>
            <Card className="card">
              <CardHeader>
                <CardImage
                  cardImageUrl="img/powershell.png"
                  className="avatar__photo center image-style"
                />
              </CardHeader>
              <CardBody className="card-content">
                Proficient in writing supportable and testable powershell
                scripts.
              </CardBody>
            </Card>
            <br />
          </Column>
          <Column className="text--center">
            <Card>
              <CardHeader>
                <CardImage
                  cardImageUrl="img/csharp.png"
                  className="avatar__photo center image-style"
                />
              </CardHeader>
              <CardBody className="card-content">
                Previous experiance with Windows forms and WPF development,
                along with C# scripting.
              </CardBody>
            </Card>
            <br />
          </Column>
          <Column>
            <Card className="card">
              <CardHeader>
                <CardImage
                  cardImageUrl="img/sql_server.png"
                  className="avatar__photo center image-style"
                />
              </CardHeader>
              <CardBody className="card-content">
                Skilled in creating and maintaining SSIS packages.
              </CardBody>
            </Card>
            <br />
          </Column>
        </Columns>
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
