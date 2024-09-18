import style from './style.module.css';

import AboutMe from '@components/aboutMe';
import Education from '@components/education';
import Overview from '@components/overview';
import Projects from '@components/projects';
import Skills from '@components/skills';

const Resume = () => {
  return (
    <main className={style.layout}>
      <Overview />
      <AboutMe />
      <Projects />
      <Education />
      <Skills />
    </main>
  );
};

export default Resume;
