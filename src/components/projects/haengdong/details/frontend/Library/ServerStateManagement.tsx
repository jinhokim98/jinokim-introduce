import {Li, Ul} from '@components/common/list';

const ServerStateManagement = () => {
  return (
    <Ul nestedCount={0}>
      <Li>
        <p className="paragraph">
          클라이언트 상태를 따로 관리하기로 결정된 이후,
          <strong className="accent">{` 서버 상태와 클라이언트 상태의 동기화를 맞춰주는 필요성`}</strong>에 의해
          도입했습니다.
        </p>
      </Li>
      <Li>
        <p className="paragraph">
          서버 상태 변화에 따른 상태와 refetch를 context로 관리하던 구조를 무효화를 이용한 방식으로 적용하면서
          <strong className="accent">{` 성격에 맞지 않는 prop`}</strong>을 줄일 수 있었습니다.
        </p>
      </Li>
      <Li>
        <p className="paragraph">
          캐시 무효화를 이용해서 클라이언트 상태와 서버 상태의 동기화를 맞추어 사용자가
          <strong className="accent">{` 최신의 데이터를 보장`}</strong>받을 수 있도록 했습니다.
        </p>
      </Li>
    </Ul>
  );
};

export default ServerStateManagement;
