import PageTitle from '@components/common/pageTitle';
import Introduce from './introduce';

const AboutMe = () => {
  return (
    <article className="page_layout">
      <PageTitle title="About Me" />
      <Introduce />
    </article>
  );
};

export default AboutMe;
