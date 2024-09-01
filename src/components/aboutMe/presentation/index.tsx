import {Li, Ul} from '@components/common/list';
import styles from './style.module.css';
import Link from '@components/common/link';

const Presentation = () => {
  return (
    <section className={styles.container} aria-label="presentation">
      <p className={`${styles.label} label`}>presentation</p>
      <Ul style={{flex: 7}}>
        <Li spot={false}>
          <details>
            <summary>학교 중앙 동아리 세미나</summary>
            <Ul>
              <Li>기간: 2022.03 ~ 2023.06</Li>
              <Li>
                <Link
                  favicon="https://www.youtube.com/favicon.ico"
                  href="https://www.youtube.com/playlist?list=PLTIdb_bLuMLrb34Zme9W334oj1zBLh8Hx"
                  text="HICC C 세미나"
                />
              </Li>
              <Li>
                <Link
                  favicon="https://www.youtube.com/favicon.ico"
                  href="https://www.youtube.com/playlist?list=PLTIdb_bLuMLo2bLV3nahunsR3DUIOpopy"
                  text="HICC Web 세미나"
                />
              </Li>
              <Li>
                <Link
                  favicon="https://www.youtube.com/favicon.ico"
                  href="https://www.youtube.com/playlist?list=PLTIdb_bLuMLpHmA6YlG-wec-2tJq9FjcC"
                  text="HICC Django 세미나"
                />
              </Li>
              <Li>
                <Link
                  favicon="https://www.youtube.com/favicon.ico"
                  href="https://www.youtube.com/playlist?list=PLTIdb_bLuMLoiWqjRmLfZ5FxBrMvb6h-Q"
                  text="HICC JS 세미나"
                />
              </Li>
            </Ul>
            <p className={styles.plainText}>
              홍익대학교 중앙동아리 HICC에서 진행했던 세미나입니다. 주로 초심자를 대상으로 강의를 진행했습니다.
            </p>
            <p className={styles.plainText}>
              제가 배우고 경험한 것들을 토대로{' '}
              <strong className="accent">강의자료를 직접 만들고 학생들에게 공유하는 경험</strong>을 해왔습니다.
            </p>
            <p className={styles.plainText}>
              이를 토대로 앞에 나와서 강의할 때 어떻게 준비하고 어떤 포인트를 집중해서 가르쳐야 하는지에 대한 경험을
              얻을 수 있게 되었습니다.
            </p>
          </details>
        </Li>
        <Li spot={false}>
          <details>
            <summary>일단 도전해보기 - Hongik devtalk</summary>
            <Ul>
              <Li>
                <p>기간: 2023.11</p>
              </Li>
              <Li>
                <Link
                  favicon="https://www.youtube.com/favicon.ico"
                  href="https://youtu.be/T_xEyi7U5As?si=Qv5ISW-0_V0PMHdz"
                  text="Hongik DevTalk 연사"
                />
              </Li>
            </Ul>
            <p className={styles.plainText}>대학교 때 개발에 도전해봤던 스토리를 주제로 발표를 해봤습니다.</p>
            <p className={styles.plainText}>협업 과정에서 겪었던 실패에 대해서 주로 공유했습니다.</p>
          </details>
        </Li>
        <Li spot={false}>
          <details>
            <summary>쿠키의 쿠키 - 우아한테크코스 tecotalk</summary>
            <Ul>
              <Li>
                <p>기간: 2024.05</p>
              </Li>
              <Li>
                <Link
                  favicon="https://www.youtube.com/favicon.ico"
                  href="https://youtu.be/T9y9RsysCvQ?si=DZqYY87aTpqEW-YR"
                  text="우아한테크 [10분 테코톡] 쿠키의 쿠키"
                />
              </Li>
            </Ul>
          </details>
        </Li>
        <Li>
          자료를 준비해 사람들 앞에서 <strong className="accent">발표하는 일에 즐거움</strong>을 느낍니다.
        </Li>
        <Li>그 속에서 의견을 주고 받는 것도 좋아합니다.</Li>
      </Ul>
    </section>
  );
};

export default Presentation;
