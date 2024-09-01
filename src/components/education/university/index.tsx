import {Li, Ul} from '@components/common/list';
import styles from './style.module.css';
import Link from '@components/common/link';

const University = () => {
  return (
    <section className={styles.container} aria-label="university">
      <div className={`${styles.label}`}>
        <p className="label">홍익대학교</p>
        <p className="paragraph">2017.03.02 입학</p>
        <p className="paragraph">2024.08.22 졸업</p>
      </div>
      <Ul style={{flex: 7}}>
        <Li>
          <p className="label">전공</p>
        </Li>
        <Ul nestedCount={1}>
          <Li>
            <p className="paragraph">경영대학 경영학부 경영학전공</p>
          </Li>
          <Li>
            <p className="paragraph">공과대학 정보컴퓨터공학부 컴퓨터공학전공</p>
          </Li>
        </Ul>
        <Li>
          <p className="label">평점</p>
        </Li>
        <Ul nestedCount={1}>
          <Li>
            <p className="paragraph">4.28/4.5 (153)</p>
          </Li>
        </Ul>
        <Li>
          <p className="label">기타</p>
        </Li>
        <Ul nestedCount={1}>
          <Li>
            <p className="paragraph">중앙 동아리 HICC (Hong Ik Computer Club) 회장, 학술부장</p>
          </Li>
          <Li spot={false}>
            <Link
              favicon="https://hicc.co.kr/assets/favicon-C2-8IzK9.ico"
              href="https://hicc.co.kr"
              text="HICC 공식 홈페이지"
            />
          </Li>
        </Ul>
        <p className="paragraph">
          {`대학 생활 중 프로그래밍을 처음 접했고
            여러 프로젝트를 하며 프론트엔드 개발자로 진로 결정`}
        </p>
      </Ul>
    </section>
  );
};

export default University;
