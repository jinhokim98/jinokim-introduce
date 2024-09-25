import styles from './style.module.css';
import ServiceImage from '@assets/images/service/haengdong.png';
import {Skills, Links, Introduce, Frontend, Contribute} from './details';
import Details from '@components/common/details';

const Haengdong = () => {
  return (
    <>
      <hgroup className={styles.hgroup}>
        <h2 className="subtitle">행동대장들의 정산을 간편하게💰 행동대장</h2>
        <p className="paragraph">
          {`행사 진행을 하면서 제일 어려운 일, 정산! 인원 변동에 따른 정산의 어려움을 해결해주는 서비스.
    우아한테크코스에서 FE 4명, BE 4명이 한 팀이 되어 진행한 프로젝트입니다.`}
        </p>
        <Details summary="행동대장 소개 이미지" open>
          <figure className={styles.figure}>
            <img src={ServiceImage} className={styles.serviceImage} alt="service image" />
          </figure>
        </Details>
      </hgroup>
      <section className={styles.details} aria-label="details">
        <Skills />
        <Links />
        <Introduce />
        <Frontend />
        {/* <Contribute /> */}
      </section>
    </>
  );
};

export default Haengdong;
