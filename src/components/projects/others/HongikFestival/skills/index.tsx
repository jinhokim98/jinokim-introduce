import {Li, Ul} from '@components/common/list';

const Skills = () => {
  return (
    <div className="paragraph">
      <span className="label">{'Skills: '}</span>
      <Ul>
        <Li>
          <p className="paragraph">react, javascript, vite, react-query</p>
        </Li>
      </Ul>
    </div>
  );
};

export default Skills;
