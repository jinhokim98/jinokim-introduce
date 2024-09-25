import style from './style.module.css';

const Introduce = () => {
  return (
    <div className={style.container}>
      <span className="label">{'Introduce: '}</span>
      <p className="paragraph">
        {`행사 간 회계의 불투명성, 정산의 어려움에 대한 충족되지 않은 니즈 파악 
        인원 변동을 기준으로 지출 내역을 입력 후, 정산 결과를 링크로 공유하면 참여자들이 손쉽게 비용을 확인할 수 있습니다.`}
      </p>
    </div>
  );
};

export default Introduce;
