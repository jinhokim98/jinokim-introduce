import {Li, Ul} from '@components/common/list';
import PageTitle from '@components/common/pageTitle';

const Skills = () => {
  return (
    <article className="page_layout">
      <PageTitle title="Skills" />
      <section className="" aria-label="Language">
        <p>Language</p>
        <Ul>
          <Li>
            <p className="paragraph">Javascript</p>
          </Li>
          <Li>
            <p className="paragraph">Typescript</p>
          </Li>
        </Ul>
      </section>
      <section className="" aria-label="Framework">
        <p>Framework</p>
        <Ul>
          <Li>
            <p className="paragraph">React.js</p>
          </Li>
        </Ul>
      </section>
      <section className="" aria-label="Bundler">
        <p>Bundler</p>
        <Ul>
          <Li>
            <p className="paragraph">Webpack</p>
          </Li>
          <Li>
            <p className="paragraph">Vite</p>
          </Li>
        </Ul>
      </section>
      <section className="" aria-label="Style library">
        <p>Style library</p>
        <Ul>
          <Li>
            <p className="paragraph">Emotion.js</p>
          </Li>
          <Li>
            <p className="paragraph">Styled components</p>
          </Li>
        </Ul>
      </section>
      <section className="" aria-label="State management library">
        <p>State management library</p>
        <Ul>
          <Li>
            <p className="paragraph">Zustand, Recoil</p>
          </Li>
          <Li>
            <p className="paragraph">React-Query</p>
          </Li>
        </Ul>
      </section>
      <section className="" aria-label="Test">
        <p>Test</p>
        <Ul>
          <Li>
            <p className="paragraph">React Test Library</p>
          </Li>
          <Li>
            <p className="paragraph">Jest</p>
          </Li>
          <Li>
            <p className="paragraph">MSW</p>
          </Li>
          <Li>
            <p className="paragraph">Storybook</p>
          </Li>
        </Ul>
      </section>
    </article>
  );
};

export default Skills;
