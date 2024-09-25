type UlProps = {
  style?: React.CSSProperties;
  nestedCount?: number;
};

const nestedUlStyle = (nestedCount: number, style?: React.CSSProperties): React.CSSProperties => {
  return {
    padding: nestedCount === 0 ? 0 : `0 ${nestedCount}rem`,
    display: 'flex',
    flexDirection: 'column',

    ...style,
  };
};

const Ul = ({style, nestedCount = 0, children}: React.PropsWithChildren<UlProps>) => {
  return (
    <ul style={nestedUlStyle(nestedCount, style)} className="paragraph">
      {children}
    </ul>
  );
};

export default Ul;
