import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '835'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/tomfynes',
    component: ComponentCreator('/blog/authors/tomfynes', 'b0a'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/misc',
    component: ComponentCreator('/blog/tags/misc', '3d9'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '841'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/skills',
    component: ComponentCreator('/skills', '56c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '20b'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '88b'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'ff7'),
            routes: [
              {
                path: '/docs/Getting Started/Duckdb',
                component: ComponentCreator('/docs/Getting Started/Duckdb', '409'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Getting Started/MySql',
                component: ComponentCreator('/docs/Getting Started/MySql', 'b98'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Getting Started/Postgres',
                component: ComponentCreator('/docs/Getting Started/Postgres', '41c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Getting Started/SQL Server',
                component: ComponentCreator('/docs/Getting Started/SQL Server', 'abb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 1/01 What is SQL',
                component: ComponentCreator('/docs/Grade 1/01 What is SQL', 'bd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 1/02 Relational databases',
                component: ComponentCreator('/docs/Grade 1/02 Relational databases', 'a2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 1/03 Simple queries',
                component: ComponentCreator('/docs/Grade 1/03 Simple queries', '693'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 1/04 Filtering data',
                component: ComponentCreator('/docs/Grade 1/04 Filtering data', 'a49'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 2/01 sorting data',
                component: ComponentCreator('/docs/Grade 2/01 sorting data', '536'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 2/02 Limiting data',
                component: ComponentCreator('/docs/Grade 2/02 Limiting data', '3c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 2/03 Basic functions',
                component: ComponentCreator('/docs/Grade 2/03 Basic functions', '991'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 2/04 Alias',
                component: ComponentCreator('/docs/Grade 2/04 Alias', '38c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 3/01 joins',
                component: ComponentCreator('/docs/Grade 3/01 joins', '1fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 3/02 Aggregation',
                component: ComponentCreator('/docs/Grade 3/02 Aggregation', '880'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 3/03 subqueries',
                component: ComponentCreator('/docs/Grade 3/03 subqueries', '21f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 3/04 Set operations',
                component: ComponentCreator('/docs/Grade 3/04 Set operations', '22b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 4/01 Inserting data',
                component: ComponentCreator('/docs/Grade 4/01 Inserting data', '378'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 4/02 Updateing data',
                component: ComponentCreator('/docs/Grade 4/02 Updateing data', '6c0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 4/03 Deleting data',
                component: ComponentCreator('/docs/Grade 4/03 Deleting data', 'f10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 5/01 Create tables',
                component: ComponentCreator('/docs/Grade 5/01 Create tables', '32f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 5/02 Altering tables',
                component: ComponentCreator('/docs/Grade 5/02 Altering tables', '021'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 5/03 Droping Tables',
                component: ComponentCreator('/docs/Grade 5/03 Droping Tables', 'abd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 5/04 Constraints',
                component: ComponentCreator('/docs/Grade 5/04 Constraints', '2ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 6/01 String functions',
                component: ComponentCreator('/docs/Grade 6/01 String functions', 'f06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 6/02 Date time',
                component: ComponentCreator('/docs/Grade 6/02 Date time', '295'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 6/03 Maths',
                component: ComponentCreator('/docs/Grade 6/03 Maths', '3fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 6/04 Case',
                component: ComponentCreator('/docs/Grade 6/04 Case', '09f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 7/01 Indexes',
                component: ComponentCreator('/docs/Grade 7/01 Indexes', '402'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 7/02 Optermization',
                component: ComponentCreator('/docs/Grade 7/02 Optermization', '087'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 7/03 Execution plans',
                component: ComponentCreator('/docs/Grade 7/03 Execution plans', '2ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 7/04 Temp tables and ctes',
                component: ComponentCreator('/docs/Grade 7/04 Temp tables and ctes', 'e3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 8/01 Transactions',
                component: ComponentCreator('/docs/Grade 8/01 Transactions', 'bf8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 8/02 Locking concurrentct',
                component: ComponentCreator('/docs/Grade 8/02 Locking concurrentct', '0e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 8/03 Windows functions',
                component: ComponentCreator('/docs/Grade 8/03 Windows functions', '1d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Grade 9 (Extras)/SQL Server/01 tsql cursors',
                component: ComponentCreator('/docs/Grade 9 (Extras)/SQL Server/01 tsql cursors', 'f63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'ff5'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
