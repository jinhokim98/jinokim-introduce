import PageTitle from '@components/common/pageTitle';
import styles from './style.module.css';

const Skills = () => {
  return (
    <article className="page_layout">
      <PageTitle title="Skills" />
      <div className={styles.wrapper}>
        <section className={styles.container}>
          <span className="label">Language: </span>
          <p className="paragraph">Javascript, typescript</p>
        </section>

        <section className={styles.container}>
          <span className="label">Framework: </span>
          <p className="paragraph">React.js</p>
        </section>

        <section className={styles.container}>
          <span className="label">Bundler: </span>
          <p className="paragraph">Webpack, Vite</p>
        </section>

        <section className={styles.container}>
          <span className="label">Style library: </span>
          <p className="paragraph">Emotion.js, Emotion.js</p>
        </section>

        <section className={styles.container}>
          <span className="label">State management library: </span>
          <p className="paragraph">Zustand, Recoil, React-Query</p>
        </section>

        <section className={styles.container}>
          <span className="label">Test: </span>
          <p className="paragraph">React Test Library, Jest, MSW, Storybook, Cypress</p>
        </section>
      </div>
    </article>
  );
};

export default Skills;
