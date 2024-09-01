import './style.css';

type UlProps = {
  style?: React.CSSProperties;
};

const Ul = ({style, children}: React.PropsWithChildren<UlProps>) => {
  return (
    <ul style={style} className="paragraph">
      {children}
    </ul>
  );
};

export default Ul;
