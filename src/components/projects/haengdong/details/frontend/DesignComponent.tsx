import Link from '@components/common/link';
import {Li, Ul} from '@components/common/list';

const DesignComponent = () => {
  return (
    <Ul>
      <Li>
        <p className="label">design component 도입</p>
      </Li>
      <Ul nestedCount={1}>
        <Li>
          <p className="paragraph">행동대장에서 사용하는 디자인 컴포넌트를 제작</p>
        </Li>
        <Li>
          <p className="paragraph">
            <strong className="accent">개발자 간 통일된 디자인 구현</strong>을 위해 제작했습니다.
          </p>
        </Li>
        <Li>
          <Link
            favicon="https://66a9dea5db27afc2b8f91ba7-ethspwhxai.chromatic.com/favicon.svg"
            href="https://66a9dea5db27afc2b8f91ba7-ethspwhxai.chromatic.com/"
            text="design component storybook"
          />
        </Li>
      </Ul>
    </Ul>
  );
};

export default DesignComponent;
