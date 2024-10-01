import {Li, Ol, Ul} from '@components/common/list';
import styles from './style.module.css';

const ChangePliability = () => {
  return (
    <Ol order={3} text="변경에 유연하게 대응하는 방법 고민">
      <Ul nestedCount={1}>
        <div className={styles.container}>
          <div className={styles.left}>
            <p className="paragraph">
              <strong className="accent">디자인, 데이터, 기능</strong>의 분리
            </p>
          </div>
          <Ul>
            <Li>
              <p className="paragraph">디자인은 디자인 컴포넌트를 활용해 관리</p>
            </Li>
            <Li>
              <p className="paragraph">데이터는 상태 관리 라이브러리를 활용해서 관리 후 디자인 시스템에 주입</p>
            </Li>
            <Li>
              <p className="paragraph">기능은 custom hook에 데이터를 넘겨줘서 처리</p>
            </Li>
          </Ul>
        </div>
      </Ul>
    </Ol>
  );
};

export default ChangePliability;
