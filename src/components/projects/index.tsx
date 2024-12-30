import PageTitle from '@components/common/pageTitle';
import Haengdong from './haengdong';
import {LikeLionUniversity} from './others';

const Projects = () => {
  return (
    <article className="page_layout">
      <PageTitle title="Projects" />
      <Haengdong />
      <LikeLionUniversity />
    </article>
  );
};

export default Projects;
