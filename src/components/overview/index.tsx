import ButtonIcon from '@components/icon/ButtonIcon';
import styles from './style.module.css';
import Instagram from '@assets/images/instagram.svg?react';
import Github from '@assets/images/github.svg?react';

const Overview = () => {
  const openSite = (site: string) => {
    window.open(site, '_blank');
  };

  return (
    <article className="page_layout">
      <header className={styles.header}>
        <hgroup className={styles.hgroup}>
          <h1 className="title primary_color">김진호</h1>
          <h2 className="subtitle gray_color">Frontend developer</h2>
        </hgroup>
        <aside className={styles.followMe} aria-label="follow me">
          <nav className={styles.buttonGroup}>
            <ButtonIcon Icon={Instagram} onClick={() => openSite('https://www.instagram.com/jinokim98/')} />
            <ButtonIcon Icon={Github} onClick={() => openSite('https://github.com/jinhokim98')} />
          </nav>
          <p className={`${styles.p} paragraph`}>
            <span className="label">{'Blog: '}</span>
            <a href="https://jinokim.tistory.com/" target="_blank_">
              Jinokim의 개발일지
            </a>
          </p>
          <p className={`${styles.p} paragraph`}>
            <span className="label">{'Email: '}</span>
            rlawlsgh1227@gmail.com
          </p>
        </aside>
      </header>
    </article>
  );
};

export default Overview;
