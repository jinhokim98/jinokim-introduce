import PageTitle from '@components/common/pageTitle';
import Wooteco from './wooteco';
import University from './university';

const Education = () => {
  return (
    <article className="page_layout">
      <PageTitle title="Education" />
      <Wooteco />
      <University />
    </article>
  );
};

export default Education;
