import {Li, Ul} from '@components/common/list';
import styles from './style.module.css';

const Introduce = () => {
  return (
    <section className={styles.container} aria-label="introduction">
      <Ul>
        <Li>안녕하세요. 프론트엔드 개발자 김진호입니다.</Li>
        <Li>활발하고 대화하는 것을 좋아합니다.</Li>
        <Li>
          <strong className="accent">발표</strong>하며 지식을 공유하는 것을 좋아합니다.
        </Li>
      </Ul>
    </section>
  );
};

export default Introduce;
