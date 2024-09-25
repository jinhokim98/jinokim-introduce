import ButtonIcon from '@components/common/icon/ButtonIcon';
import styles from './style.module.css';
import Github from '@assets/images/github.svg?react';
import Blog from '@assets/images/blog.svg?react';
import Email from '@assets/images/email.svg?react';

const Overview = () => {
  const openSite = (site: string) => {
    window.open(site, '_blank');
  };

  return (
    <article className={styles.layout}>
      <hgroup className={styles.hgroup}>
        <h1 className={`${styles.name} primary_color`}>김진호</h1>
        <h2 className="subtitle gray_color">Frontend developer</h2>
      </hgroup>
      <aside className={styles.followMe} aria-label="follow me">
        <nav className={styles.buttonGroup}>
          <ButtonIcon
            Icon={Github}
            displayName="jinhokim98"
            onClick={() => openSite('https://github.com/jinhokim98')}
          />
          <ButtonIcon
            Icon={Blog}
            displayName="jinokim의 개발일지"
            onClick={() => openSite('https://jinokim.tistory.com')}
          />
          <ButtonIcon Icon={Email} displayName="rlawlsgh1227@gmail.com" />
        </nav>
      </aside>
    </article>
  );
};

export default Overview;
