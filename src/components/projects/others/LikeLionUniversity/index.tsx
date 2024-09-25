import styles from '../style.module.css';
import Links from './links';
import Contribute from './contribute';
import Skills from './skills';

const LikeLionUniversity = () => {
  return (
    <>
      <hgroup className={styles.hgroup}>
        <h2 className="subtitle">멋쟁이사자처럼 대학 공식 홈페이지 1기</h2>
        <p className="paragraph">
          {`멋쟁이사자처럼 대학 본사와 제휴하여\n 멋쟁이사자처럼 연합동아리를 운영하며 필요한 기능들을 (리크루팅, 프로젝트 소개, 커뮤니티) 제작한 프로젝트`}
        </p>
      </hgroup>
      <section className={styles.details} aria-label="details">
        <Skills />
        <Links />
        <Contribute />
      </section>
    </>
  );
};

export default LikeLionUniversity;
