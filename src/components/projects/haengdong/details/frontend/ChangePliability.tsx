import {Li, Ul} from '@components/common/list';

const ChangePliability = () => {
  return (
    <Ul style={{marginTop: '0.5rem'}}>
      <Li>
        <p className="label">변경에 유연하게 대응하는 방법 고민</p>
      </Li>
      <Ul nestedCount={1}>
        <Li>
          <p className="paragraph">
            <strong className="accent">디자인, 데이터, 기능</strong>의 분리
          </p>
        </Li>
        <Ul nestedCount={2}>
          <Li>
            <p className="paragraph">디자인은 디자인 컴포넌트를 활용해 관리</p>
          </Li>
          <Li>
            <p className="paragraph">데이터는 상태 관리 라이브러리를 활용해서 관리 후 디자인 시스템에 주입</p>
          </Li>
          <Li>
            <p className="paragraph">기능은 custom hook에 데이터를 넘겨줘서 처리</p>
          </Li>
        </Ul>
        <Li>
          <p className="paragraph">
            각각의 관심사를 분리하여 코드를 작성, 변화가 일어났을 때 그 부분만 수정해주면 되는 구조로 변화에 유연하게
            대응할 수 있도록 했습니다.
          </p>
        </Li>
      </Ul>
    </Ul>
  );
};

export default ChangePliability;
