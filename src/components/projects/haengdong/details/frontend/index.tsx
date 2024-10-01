import style from './style.module.css';

import DesignComponent from './DesignComponent/DesignComponent';
import ChangePliability from './ChangePliability/ChangePliability';
import UserExperience from './UserExperience/UserExperience';
import Library from './Library';
import Performance from './Performance';

const Frontend = () => {
  return (
    <div className={style.container}>
      <span className="label">{'Frontend: '}</span>
      <UserExperience />
      <DesignComponent />
      <ChangePliability />
      <Library />
      <Performance />
    </div>
  );
};

export default Frontend;
