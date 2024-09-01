type UlProps = {
  style?: React.CSSProperties;
  nestedCount?: number;
};

const nestedUlStyle = (nestedCount: number, style?: React.CSSProperties): React.CSSProperties => {
  return {
    padding: nestedCount === 0 ? '1rem' : `0 ${nestedCount}rem`,
    display: 'flex',
    flexDirection: 'column',

    gap: '0.75rem',

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
