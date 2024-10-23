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
              <Li>
                <Link
                  favicon="https://t1.daumcdn.net/tistory_admin/favicon/tistory_favicon_32x32.ico"
                  href="https://jinokim.tistory.com/41"
                  text="IntersectionObserver를 사용한 이미지 lazy loading으로 Loading 632ms에서 332ms로 50% 개선"
                />
              </Li>
              <Li>
                <Link
                  favicon="https://t1.daumcdn.net/tistory_admin/favicon/tistory_favicon_32x32.ico"
                  href="https://jinokim.tistory.com/42"
                  text="외부 스크립트 동적 로딩을 사용해서 data transferred 761KB에서 731KB로 30KB 감소"
                />
              </Li>
              <Li>
                <Link
                  favicon="https://t1.daumcdn.net/tistory_admin/favicon/tistory_favicon_32x32.ico"
                  href="https://jinokim.tistory.com/43"
                  text="코드 스플리팅과 tree shaking으로 main bundle 219KB에서 194KB로 25KB 감소"
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
