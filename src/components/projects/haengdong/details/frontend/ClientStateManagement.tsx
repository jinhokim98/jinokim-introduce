import {Li, Ul} from '@components/common/list';

const ClientStateManagement = () => {
  return (
    <Ul style={{marginTop: '0.5rem'}}>
      <Li>
        <p className="label">클라이언트 상태를 쉽게 관리하기 위한 상태 관리 라이브러리 도입</p>
      </Li>
      <Ul nestedCount={1}>
        <Li>
          <p className="paragraph">
            기존에는 서버 상태에 의존해서 코드를 작성했기 때문에 상태 관리 라이브러리를 도입하지 않았습니다.
          </p>
        </Li>
        <Li>
          <p className="paragraph">
            지출 내역 동적 생성, 순서 변경, 금액 차등 적용 등을 고려하며
            <strong className="accent">서버 상태 만으로는 한계가 있음을 인지</strong>하고 클라이언트 상태, 서버 상태 두
            개를 운용하기로 결정했습니다.
          </p>
        </Li>
        <Li>
          <p className="paragraph">
            비동기 서버 상태는 react-query를 사용하므로 비동기 처리를 위한 상태 라이브러리 활용은 하지 않아도 되며,
            <strong className="accent">러닝커브가 낮고 가벼운 라이브러리</strong>인 zustand를 사용하기로 결정했습니다.
          </p>
        </Li>
      </Ul>
    </Ul>
  );
};

export default ClientStateManagement;
