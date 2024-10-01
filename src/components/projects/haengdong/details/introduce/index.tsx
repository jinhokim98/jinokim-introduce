import Link from '@components/common/link';
import style from './style.module.css';
import {Li, Ul} from '@components/common/list';

const Introduce = () => {
  return (
    <div className={style.container}>
      <span className="label">{'Introduce: '}</span>
      <Ul>
        <Li>
          <p className="paragraph">
            행사 간 회계의 불투명성, <strong className="accent">{`정산의 어려움`}</strong>에 대한 충족되지 않은 니즈
            파악
          </p>
          <p>
            인원 변동을 기준으로 지출 내역을 입력 후, 정산 결과를 링크로 공유하면{' '}
            <strong className="accent">참여자들이 손쉽게 비용을 확인</strong>할 수 있습니다.
          </p>
        </Li>
        <Li>
          <Link
            href="https://www.youtube.com/watch?v=RPF6rfeLF0I"
            favicon="https://www.youtube.com/favicon.ico"
            text="👑 행동대장 사용 예시 | 🧾 정산을 편하게 하고 싶다고? 그렇다면 🙋🏻 행동대장!"
          />
        </Li>
      </Ul>
    </div>
  );
};

export default Introduce;
