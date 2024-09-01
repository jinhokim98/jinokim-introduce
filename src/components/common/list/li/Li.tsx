import Spot from '@assets/images/spot.svg?react';
import styles from './style.module.css';

type LiProps = {
  spot?: boolean;
};

const Li = ({children, spot = true}: React.PropsWithChildren<LiProps>) => {
  return (
    <li className={styles.li}>
      {spot && (
        <div className={styles.spot}>
          <Spot />
        </div>
      )}
      {children}
    </li>
  );
};

export default Li;
