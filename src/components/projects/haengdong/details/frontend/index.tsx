import DesignComponent from './DesignComponent';
import ChangePliability from './ChangePliability';
import ClientStateManagement from './ClientStateManagement';
import ServerStateManagement from './ServerStateManagement';
import UserExperience from './UserExperience';

const Frontend = () => {
  return (
    <div>
      <span className="label">{'Frontend: '}</span>
      <UserExperience />
      <DesignComponent />
      <ChangePliability />
      <ClientStateManagement />
      <ServerStateManagement />
    </div>
  );
};

export default Frontend;
