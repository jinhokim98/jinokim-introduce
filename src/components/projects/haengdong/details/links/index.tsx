import Link from '@components/common/link';
import {Li, Ul} from '@components/common/list';

const Links = () => {
  return (
    <div>
      <span className="label">{'Links: '}</span>
      <Ul>
        <Li>
          <Link
            favicon="https://app.haengdong.pro/favicon.ico"
            href="https://app.haengdong.pro"
            text="행동대장 서비스링크"
          />
        </Li>
        <Li>
          <Link
            favicon="https://github.com/favicon.ico"
            href="https://github.com/woowacourse-teams/2024-haeng-dong"
            text="행동대장 레포지토리"
          />
        </Li>
      </Ul>
    </div>
  );
};

export default Links;
