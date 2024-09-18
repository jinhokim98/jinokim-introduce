import Link from '@components/common/link';
import {Li, Ul} from '@components/common/list';

const Contribute = () => {
  return (
    <div className="paragraph">
      <span className="label">{'Contribute: '}</span>
      <Ul>
        <Li>
          <p className="label">프론트엔드 팀원</p>
        </Li>
        <Ul nestedCount={1}>
          <Li>
            <p className="paragraph">
              사람들이 제일 많이 확인할 <strong className="accent">메인페이지</strong>를 담당
            </p>
          </Li>
          <Ul nestedCount={2}>
            <Li>
              <Link
                favicon="https://github.com/favicon.ico"
                href="https://github.com/HongikUnivFestival/client-with-react-pwa/tree/develop?tab=readme-ov-file#%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80"
                text="메인페이지 기능 설명"
              />
            </Li>
          </Ul>
          <Li>
            <p className="paragraph">
              다양한 기기에서 비슷한 경험을 제공하도록 <strong className="accent">반응형 적용</strong>에 대해서 많이
              배우게 됐던 프로젝트
            </p>
          </Li>
        </Ul>
      </Ul>
    </div>
  );
};

export default Contribute;
