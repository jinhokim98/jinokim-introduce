import style from './style.module.css';

import DesignComponent from './DesignComponent/DesignComponent';
import ChangePliability from './ChangePliability/ChangePliability';
import ClientStateManagement from './ClientStateManagement';
import ServerStateManagement from './ServerStateManagement';
import UserExperience from './UserExperience/UserExperience';

const Frontend = () => {
  return (
    <div className={style.container}>
      <span className="label">{'Frontend: '}</span>
      <UserExperience />
      <DesignComponent />
      <ChangePliability />
      {/* <ClientStateManagement />
      <ServerStateManagement /> */}
    </div>
  );
};

export default Frontend;
