import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Useful',
    Svg: require('@site/static/img/undraw_powerful.svg').default,
    description: (
      <>
        An extendable plugin providing a wide array of out of the box solutions that every organization can use.
      </>
    ),
  },
  {
    title: 'Free & Open Source',
    Svg: require('@site/static/img/undraw_celebrate.svg').default,
    description: (
      <>
        The Community Plugin is a freely availabe, community driven, open resource you can use as you see fit.
      </>
    ),
  },
  {
    title: 'Evolving',  
    Svg: require('@site/static/img/undraw_evolving.svg').default,
    description: (
      <>
        We are always looking for new ways to improve the plugin and look forward to your input and contributions.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
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
