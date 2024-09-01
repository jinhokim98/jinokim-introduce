import PageTitle from '@components/common/pageTitle';
import Introduce from './introduce';
import Presentation from './presentation';

const AboutMe = () => {
  return (
    <article className="page_layout">
      <PageTitle title="About Me" />
      <Introduce />
      <Presentation />
    </article>
  );
};

export default AboutMe;
