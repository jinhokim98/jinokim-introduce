import Link from '@components/common/link';
import {Ul, Ol} from '@components/common/list';
import styles from './style.module.css';
import ServerStateManagement from './ServerStateManagement';

const Library = () => {
  return (
    <section>
      <Ol order={4} text="근거있는 기술 도입">
        <Ul nestedCount={1}>
          <p className="paragraph">
            기술을 미리 도입하지 않고<strong className="accent">{` 기술도입이 필요할 때 `}</strong> 도입했습니다.
          </p>
          <div className={styles.container}>
            <Link
              favicon="https://github.com/favicon.ico"
              href="https://github.com/woowacourse-teams/2024-haeng-dong/pull/388"
              text="상태 관리 라이브러리 도입 PR"
            />
            <ServerStateManagement />
          </div>
        </Ul>
      </Ol>
    </section>
  );
};

export default Library;
