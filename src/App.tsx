import AboutMe from '@components/aboutMe';
import Education from '@components/education';
import Overview from '@components/overview';
import Projects from '@components/projects';
import Skills from '@components/skills';

function App() {
  return (
    <main>
      <Overview />
      <AboutMe />
      <Projects />
      <Education />
      <Skills />
    </main>
  );
}

export default App;
