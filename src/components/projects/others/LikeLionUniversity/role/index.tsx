import Link from '@components/common/link';
import {Li, Ul} from '@components/common/list';

const Role = () => {
  return (
    <div className="paragraph">
      <span className="label">{'Role: '}</span>
      <Ul>
        <Li>
          <p className="label">프론트엔드 파트장</p>
        </Li>
        <Ul nestedCount={1}>
          <Li>
            <p className="paragraph" style={{display: 'flex'}}>
              <Link
                favicon="https://likelion.university/favicon.ico"
                href="https://likelion.university/project?page=1"
                text="프로젝트 도메인"
              />
              을 메인으로 기능 개발
            </p>
          </Li>
          <Li>
            <p className="paragraph" style={{display: 'flex', gap: '0.5rem'}}>
              본사(클라이언트)의 이슈를 분류하여 책임이 있는 팀원에게{' '}
              <Link
                favicon="https://github.com/favicon.ico"
                href="https://github.com/LikelionUniv/LikelionUniv_Frontend_University/blob/main/docs/fix.md"
                text="이슈 전달"
              />
            </p>
          </Li>
          <Li>
            <p className="paragraph" style={{display: 'flex', gap: '0.5rem'}}>
              React Query 도입 결정으로 팀원들이 사용법을 익힐 수 있도록{' '}
              <Link
                favicon="https://github.com/favicon.ico"
                href="https://github.com/LikelionUniv/LikelionUniv_Frontend_University/blob/main/docs/react-query.md"
                text="사용법 문서화"
              />
            </p>
          </Li>
        </Ul>
      </Ul>
    </div>
  );
};

export default Role;
