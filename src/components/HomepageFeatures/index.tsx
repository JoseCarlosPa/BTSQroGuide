import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Procesos Estandarizados (CMMI)',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Alineación con el modelo CMMI para gestión de proyectos, ingeniería
        de software, control de versiones y aseguramiento de calidad predecible.
      </>
    ),
  },
  {
    title: 'Operación Oficina Querétaro',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Guías de bienvenida (onboarding), uso de instalaciones, dinámicas de
        equipo y directorio de herramientas en un solo punto de referencia.
      </>
    ),
  },
  {
    title: 'Docs as Code & Mejora Continua',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Documentación ágil y versionada en Git. Cualquier colaborador puede
        proponer actualizaciones mediante Pull Requests y revisiones transparentes.
      </>
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
