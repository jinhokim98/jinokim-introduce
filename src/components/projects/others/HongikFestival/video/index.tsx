import styles from './style.module.css';

import Landing from '@assets/video/landing.mp4';
import LineUp from '@assets/video/lineup.mp4';
import RoadMap from '@assets/video/roadmap.mp4';
import Schedule from '@assets/video/schedule.mp4';

const Video = () => {
  return (
    <figure className={styles.videoContainer}>
      <video className={styles.video} autoPlay loop muted playsInline>
        <source src={Landing} type="video/mp4" />
      </video>
      <video className={styles.video} autoPlay loop muted playsInline>
        <source src={LineUp} type="video/mp4" />
      </video>
      <video className={styles.video} autoPlay loop muted playsInline>
        <source src={RoadMap} type="video/mp4" />
      </video>
      <video className={styles.video} autoPlay loop muted playsInline>
        <source src={Schedule} type="video/mp4" />
      </video>
    </figure>
  );
};

export default Video;
