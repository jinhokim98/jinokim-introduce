import ButtonIcon from '@components/common/icon/ButtonIcon';
import styles from './style.module.css';
import Email from '@assets/images/email.svg?react';
import Link from '@components/common/link';

const Overview = () => {
  return (
    <article className={styles.layout}>
      <hgroup className={styles.hgroup}>
        <h1 className={`${styles.name} primary_color`}>김진호</h1>
        <h2 className="subtitle gray_color">Frontend developer</h2>
      </hgroup>
      <aside className={styles.followMe} aria-label="follow me">
        <nav className={styles.buttonGroup}>
          <Link text="jinhokim98" href="https://github.com/jinhokim98" favicon="https://github.com/favicon.ico" />
          <Link
            text="jinokim의 개발일지"
            href="https://jinokim.tistory.com"
            favicon="https://t1.daumcdn.net/tistory_admin/favicon/tistory_favicon_32x32.ico"
          />
          <ButtonIcon Icon={Email} displayName="rlawlsgh1227@gmail.com" />
        </nav>
      </aside>
    </article>
  );
};

export default Overview;
