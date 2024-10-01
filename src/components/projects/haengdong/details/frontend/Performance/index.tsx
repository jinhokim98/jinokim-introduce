import Link from '@components/common/link';
import {Li, Ul, Ol} from '@components/common/list';
import styles from './style.module.css';

const Performance = () => {
  return (
    <section>
      <Ol order={5} text="성능 개선">
        <Ul nestedCount={1}>
          <p className="paragraph">
            <strong className="accent">{` 로딩 성능을 높여 `}</strong>사용자에게 빠른 서비스 제공을 할 수 있도록
            노력했습니다.
          </p>
          <div className={styles.container}>
            <div>
              <Li>
                <Link
                  favicon="https://t1.daumcdn.net/tistory_admin/favicon/tistory_favicon_32x32.ico"
                  href="https://jinokim.tistory.com/38"
                  text="image sprite 기법을 사용해서 이미지 파일 요청 시간을 41.85ms에서 3.66ms로 개선"
                />
              </Li>
            </div>
          </div>
        </Ul>
      </Ol>
    </section>
  );
};

export default Performance;
