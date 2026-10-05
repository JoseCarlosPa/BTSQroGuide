import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons} style={{gap: '1rem', display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Comenzar Exploración 🧭
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/docs/cmmi/introduccion">
            Marco de Procesos CMMI 📋
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Inicio"
      description="Portal de documentación, procesos CMMI y operaciones de BTS Querétaro">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
