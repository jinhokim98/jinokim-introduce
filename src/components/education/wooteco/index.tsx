import {Li, Ul} from '@components/common/list';
import styles from './style.module.css';
import WootecoCharacter from '@assets/images/wooteco.png';
import Link from '@components/common/link';

const Wooteco = () => {
  return (
    <section className={styles.container} aria-label="wooteco">
      <div className={`${styles.label}`}>
        <p className="label">우아한테크코스</p>
        <p className="paragraph">(2024.02.13~ 현재)</p>
        <img src={WootecoCharacter} className={styles.character} alt="행성이" />
      </div>
      <Ul style={{flex: 7}}>
        <Li spot={false}>
          <Link favicon={WootecoCharacter} href="https://www.woowacourse.io/" text="우아한테크코스 홈페이지" />
        </Li>
        <Li>
          <p className="paragraph">6기 프론트엔드 쿠키</p>
        </Li>
        <Li>
          <p className="paragraph">
            페어 프로그래밍으로 진행하여 <strong className="accent">빠른 피드백</strong>을 받는 경험
          </p>
        </Li>
        <Li>
          <p className="paragraph">
            TDD 관점으로 <strong className="accent">프로그램의 핵심부터 구현</strong>해나가는 과정을 경험
          </p>
        </Li>
        <Li>
          <p className="paragraph">
            팀으로 서비스를 개발하고 <strong className="accent">사용자 피드백을 들으며 운영</strong>하는 경험
          </p>
        </Li>
      </Ul>
    </section>
  );
};

export default Wooteco;
