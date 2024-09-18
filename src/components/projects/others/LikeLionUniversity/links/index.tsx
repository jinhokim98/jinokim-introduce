import Link from '@components/common/link';
import {Li, Ul} from '@components/common/list';

const Links = () => {
  return (
    <div>
      <span className="label">{'Links: '}</span>
      <Ul>
        <Li>
          <Link
            favicon="https://likelion.university/favicon.ico"
            href="https://likelion.university/"
            text="멋쟁이사자처럼 대학링크"
          />
        </Li>
        <Li>
          <Link
            favicon="https://github.com/favicon.ico"
            href="https://github.com/LikelionUniv/LikelionUniv_Frontend_University"
            text="멋쟁이사자처럼 레포지토리 (현재는 2기가 운영 중)"
          />
        </Li>
      </Ul>
    </div>
  );
};

export default Links;
