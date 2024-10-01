import Link from '@components/common/link';
import {Li, Ul, Ol} from '@components/common/list';
import styles from './style.module.css';

const UserExperience = () => {
  return (
    <section>
      <Ol order={1} text="사용자 경험">
        <Ul nestedCount={1}>
          <p className="paragraph">유저가 없는 서비스는 서비스가 아니라는 그라운드 룰을 기반으로</p>
          <p className="paragraph">
            실제 사용자 <strong className="accent">{` 유저 테스트, 피드백`}</strong>를 통한 서비스 개선을 경험했습니다.
          </p>
          <div className={styles.container}>
            <div className={styles.left}>
              <Link
                favicon="//ssl.gstatic.com/docs/spreadsheets/spreadsheets_2023q4.ico"
                href="https://docs.google.com/spreadsheets/d/1xJ4X9IHlrH0ucT-GCddeR3TOAKv8Ol5AOqJ1Kg2Rg-4/edit?gid=385585465#gid=385585465"
                text="유저 테스트 결과시트"
              />
              <Link
                favicon="https://www.notion.so/images/logo-ios.png"
                href="https://www.notion.so/pakxe/51cc3328cdb84e058a39dfda7b3904da"
                text="런칭 페스티벌 피드백"
              />
            </div>
            <div>
              <Li>
                <Link
                  favicon="https://t1.daumcdn.net/tistory_admin/favicon/tistory_favicon_32x32.ico"
                  href="https://jinokim.tistory.com/36"
                  text="금액을 먼저 입력하는 경향을 반영해서 새로운 플로우 구축"
                />
              </Li>
              <Li>
                <Link
                  favicon="https://github.com/favicon.ico"
                  href="https://github.com/woowacourse-teams/2024-haeng-dong/pull/548"
                  text="공유 기능의 혼동 이슈, 카카오톡 공유 기능 도입"
                />
              </Li>
              <Li>
                <Link
                  favicon="https://github.com/favicon.ico"
                  href="https://github.com/woowacourse-teams/2024-haeng-dong/pull/556"
                  text="토스 송금 유도 기능"
                />
              </Li>
            </div>
          </div>
        </Ul>
      </Ol>
    </section>
  );
};

export default UserExperience;
