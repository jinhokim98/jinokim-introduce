import PageTitle from '@components/common/pageTitle';
import Haengdong from './haengdong';
import {HongikFestival, LikeLionUniversity} from './others';

const Projects = () => {
  return (
    <article className="page_layout">
      <PageTitle title="Projects" />
      <Haengdong />
      <LikeLionUniversity />
      <HongikFestival />
    </article>
  );
};

export default Projects;
