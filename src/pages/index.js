import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import AboutMe from "@site/src/components/About";
import { Typewriter } from "react-simple-typewriter";
import { FadeInOnScroll } from "@site/src/components/animations";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

export function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero-image", styles.heroBanner)}>
      <div className="container">
        <FadeInOnScroll direction="down" delay={0}>
          <img
            src="img/profile.jpg"
            alt="Avatar"
            loading="lazy"
            className="inline-block size-30 rounded-full ring-2 ring-white"
          />
        </FadeInOnScroll>
        <FadeInOnScroll direction="up" delay={150}>
          <Heading as="h1" className="text-4xl md:text-5xl font-extrabold mb-4">
            <div>{siteConfig.title}</div>
          </Heading>
        </FadeInOnScroll>
        <FadeInOnScroll direction="up" delay={300}>
          <p className="text-lg md:text-xl text-gray-200 h-8 font-extrabold">
            <Typewriter
              words={["Software Engineer", "Coffee lover", "Data Enthusiast"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
        </FadeInOnScroll>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Tom F website">
      <HomepageHeader />
      <main>
        <FadeInOnScroll direction="up" delay={0}>
          <AboutMe />
        </FadeInOnScroll>
      </main>
    </Layout>
  );
}
