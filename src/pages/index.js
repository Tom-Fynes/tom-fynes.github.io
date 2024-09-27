import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx("hero hero hero-image", styles.heroBanner)}>
      <div className="container">
        <img
          src="img/profile.jpg"
          alt="Avatar"
          class="hero-avatar center"
        ></img>
        <Heading as="h1" className="hero__title">
          <div>{siteConfig.title}</div>
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader/>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
