import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: ReactNode;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: <Translate id="feature.cmmi.title">Procesos Estandarizados (CMMI)</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate id="feature.cmmi.description">
        Alineación con el modelo CMMI para gestión de proyectos, ingeniería
        de software, control de versiones y aseguramiento de calidad predecible.
      </Translate>
    ),
  },
  {
    title: <Translate id="feature.ops.title">Operación Oficina Querétaro</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate id="feature.ops.description">
        Guías de bienvenida (onboarding), uso de instalaciones, dinámicas de
        equipo y directorio de herramientas en un solo punto de referencia.
      </Translate>
    ),
  },
  {
    title: <Translate id="feature.docs.title">Docs as Code & Mejora Continua</Translate>,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate id="feature.docs.description">
        Documentación ágil y versionada en Git. Cualquier colaborador puede
        proponer actualizaciones mediante Pull Requests y revisiones transparentes.
      </Translate>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
