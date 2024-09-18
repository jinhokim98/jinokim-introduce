import styles from '../style.module.css';
import Links from './links';
import Contribute from './contribute';
import Skills from './skills';
import Video from './video';

const HongikFestival = () => {
  return (
    <>
      <hgroup className={styles.hgroup}>
        <h2 className="subtitle">2023 홍익대학교 대동제 안내사이트</h2>
        <p className="paragraph">
          {`홍익대학교 총학생회와 제휴하여 대동제를 안내(일정, 부스 위치, 라인업)하는 사이트 제작
          지금은 대동제가 마무리되어 서버가 내려가있어 아래 영상으로 확인 가능`}
        </p>
      </hgroup>
      <details open>
        <summary className="paragraph">대동제 사이트 영상</summary>
        <Video />
      </details>
      <section className={styles.details} aria-label="details">
        <Skills />
        <Links />
        <Contribute />
      </section>
    </>
  );
};

export default HongikFestival;
