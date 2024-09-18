import styles from '../style.module.css';
import Links from './links';
import Role from './role';
import Skills from './skills';

const LikeLionUniversity = () => {
  return (
    <>
      <hgroup className={styles.hgroup}>
        <h2 className="subtitle">멋쟁이사자처럼 대학 공식 홈페이지 1기</h2>
        <p className="paragraph">
          {`멋쟁이사자처럼 대학 본사와 제휴하여 멋쟁이사자처럼 연합동아리를 운영하며 필요한 기능들을 (리크루팅, 프로젝트 소개, 커뮤니티) 제작한 프로젝트`}
        </p>
        <p className="paragraph">{`현재는 2기에게 인수인계를 하여 2기 인원들이 사이트 유지보수 중`}</p>
      </hgroup>
      <section className={styles.details} aria-label="details">
        <Skills />
        <Links />
        <Role />
      </section>
    </>
  );
};

export default LikeLionUniversity;
