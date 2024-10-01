import Link from '@components/common/link';
import {Ul, Ol} from '@components/common/list';
import styles from './style.module.css';
import Details from '@components/common/details';
import ClientStateManagement from './ClientStateManagement';
import ServerStateManagement from './ServerStateManagement';

const Library = () => {
  return (
    <section>
      <Ol order={3} text="근거있는 기술 도입">
        <Ul nestedCount={1}>
          <p className="paragraph">
            기술을 미리 도입하지 않고<strong className="accent">{` 기술도입이 필요할 때 `}</strong> 도입했습니다.
          </p>
          <div className={styles.container}>
            <div className={styles.left}>
              <Link
                favicon="https://github.com/favicon.ico"
                href="https://github.com/woowacourse-teams/2024-haeng-dong/pull/388"
                text="상태 관리 라이브러리 도입 PR"
              />
            </div>
            <div className={styles.right}>
              <Details summary="클라이언트 상태를 쉽게 관리하기 위한 상태 관리 라이브러리 도입">
                <ClientStateManagement />
              </Details>
              <Details summary="서버 상태를 관리하기 위한 react-query 도입">
                <ServerStateManagement />
              </Details>
            </div>
          </div>
        </Ul>
      </Ol>
    </section>
  );
};

export default Library;
