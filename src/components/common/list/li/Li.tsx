import styles from './style.module.css';

type LiProps = {
  spot?: boolean;
};

const Li = ({children, spot = true}: React.PropsWithChildren<LiProps>) => {
  return <li className={spot ? styles.spotLi : styles.li}>{children}</li>;
};

export default Li;
