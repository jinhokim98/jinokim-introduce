import Link from '@components/common/link';
import {Li, Ul} from '@components/common/list';

const Links = () => {
  return (
    <div>
      <span className="label">{'Links: '}</span>
      <Ul>
        <Li>
          <Link
            favicon="https://github.com/favicon.ico"
            href="https://github.com/HongikUnivFestival/client-with-react-pwa/tree/develop"
            text="대동제 레포지토리"
          />
        </Li>
      </Ul>
    </div>
  );
};

export default Links;
