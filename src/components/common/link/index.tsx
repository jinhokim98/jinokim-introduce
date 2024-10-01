import styles from './style.module.css';

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  favicon?: string;
  text: string;
};

const Link = ({favicon, text, href}: LinkProps) => {
  return (
    <div className={styles.link} aria-label="link">
      {favicon && <img className={styles.faviconImage} src={favicon} alt="favicon" />}
      <a href={href} className={`paragraph`} target="_blank_">
        {text}
      </a>
    </div>
  );
};

export default Link;
