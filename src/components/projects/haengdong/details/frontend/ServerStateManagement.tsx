import {Li, Ul} from '@components/common/list';

const ServerStateManagement = () => {
  return (
    <Ul style={{marginTop: '0.5rem'}}>
      <Li>
        <p className="label">서버 상태를 관리하기 위한 react-query 도입</p>
      </Li>
      <Ul nestedCount={1}>
        <Li>
          <p className="paragraph">
            클라이언트 상태를 따로 관리하기로 결정된 이후,{' '}
            <strong className="accent">서버 상태와 클라이언트 상태의 동기화를 맞춰주는 필요성</strong>에 의해
            도입했습니다.
          </p>
        </Li>
        <Li>
          <p className="paragraph">
            staleTime을 n분으로 설정해서 n분 이내에 같은 데이터를 다시 요청할 경우 캐싱된 데이터를 보여주도록 해서{' '}
            <strong className="accent">api 호출 수</strong>를 줄였습니다.
          </p>
        </Li>
        <Li>
          <p className="paragraph">
            캐시 무효화와 초기화를 이용해서 클라이언트 상태와 서버 상태의 동기화를 맞추어 사용자가{' '}
            <strong className="accent">최신의 데이터를 보장</strong>받을 수 있도록 했습니다.
          </p>
        </Li>
      </Ul>
    </Ul>
  );
};

export default ServerStateManagement;
