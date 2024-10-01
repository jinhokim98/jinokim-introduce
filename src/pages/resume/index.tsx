import style from './style.module.css';

import AboutMe from '@components/aboutMe';
import Education from '@components/education';
import Overview from '@components/overview';
import Presentation from '@components/presentation';
import Projects from '@components/projects';
import Skills from '@components/skills';

const Resume = () => {
  return (
    <main className={style.layout}>
      <section className={`${style.firstPage} page_start`}>
        <Overview />
        <AboutMe />
        <Presentation />
      </section>
      <section className="page_split">
        <Projects />
      </section>
      <section className="page_split">
        <Education />
        <Skills />
      </section>
    </main>
  );
};

export default Resume;
