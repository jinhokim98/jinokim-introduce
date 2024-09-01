import PageTitle from '@components/common/pageTitle';
import styles from './style.module.css';
import Introduce from './introduce';
import Presentation from './presentation';

const AboutMe = () => {
  return (
    <article className="page_layout">
      <PageTitle title="About Me" />
      <section className={styles.section} aria-label="introduction">
        <Introduce />
      </section>
      <section className={styles.section} aria-label="presentation">
        <Presentation />
      </section>
    </article>
  );
};

export default AboutMe;
