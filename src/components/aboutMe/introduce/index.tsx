import {Li, Ul} from '@components/common/list';
import styles from './style.module.css';

const Introduce = () => {
  return (
    <>
      <p className={`${styles.label} label`}>introduce</p>
      <Ul style={{flex: 8}}>
        <Li>
          <p>안녕하세요. 프론트엔드 개발자 김진호입니다.</p>
        </Li>
        <Li>
          <p>활발하고 대화하는 것을 좋아합니다.</p>
        </Li>
        <Li>
          <p>
            <strong className={styles.accent}>발표</strong>하며 지식을 공유하는 것을 좋아합니다.
          </p>
        </Li>
        <Li>
          <p>모르는 것이 있다면 즉각 물어보며, 피드백을 적절히 수용합니다.</p>
        </Li>
      </Ul>
    </>
  );
};

export default Introduce;
