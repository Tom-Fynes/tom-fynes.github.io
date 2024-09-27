import styles from './styles.module.css';

const FeatureList = [
  {
    title: "About Me",
    Svg: "@site/static/img/TF_logo.png",
    description: (
      <>
        I am a passionte Software Engineer currently working as a Senior Data
        Engineer at 
        <a
          href="https://www.emishealth.com/"
          title="EMIS Group plc."
          target="_blank"
          rel="noopener"
        >
          EMIS Group plc.
        </a>
        within their Data and Analytics department, with a background in data
        engineering, analytics, and leadership, I am highly passionate about
        analytics and the insights and benefits data driven solutions can bring.
      </>
    ),
  },
];

function Feature() {
  return (
    <div className="container">
      <h2 className="h2">About Me </h2>
      <h3>Hi I'm Tom</h3>
      <p>
        I am a passionte Software Engineer currently working as a Senior Data
        Engineer at&nbsp;
        <a
          href="https://www.emishealth.com/"
          title="EMIS Group plc."
          target="_blank"
          rel="noopener"
        >
          EMIS Group plc&nbsp;
        </a>
        within their Data and Analytics department, with a background in data
        engineering, analytics, and leadership, I am highly passionate about
        analytics and the insights and benefits data driven solutions can bring.
      </p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

