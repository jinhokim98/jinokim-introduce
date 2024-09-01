import {Li, Ul} from '@components/common/list';

const Introduce = () => {
  return (
    <div>
      <span className="label">{'Introduce: '}</span>
      <Ul>
        <Li>
          <p className="paragraph">행사 주최자, 참여자들의 충족되지 않은 니즈 파악</p>
        </Li>
        <Ul nestedCount={1}>
          <Li>
            <p className="paragraph">회계의 불투명성, 정산의 어려움</p>
          </Li>
        </Ul>
      </Ul>
      <Ul style={{paddingTop: 0}}>
        <Li>
          <p className="paragraph">인원 변동을 기준으로 차수를 나누어 지출 내역을 실시간으로 입력</p>
        </Li>
        <Ul nestedCount={1}>
          <Li>
            <p className="paragraph">정산 결과를 링크로 공유하면 참여자들이 손쉽게 비용을 확인할 수 있습니다.</p>
          </Li>
        </Ul>
      </Ul>
    </div>
  );
};

export default Introduce;
