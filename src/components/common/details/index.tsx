import style from './style.module.css';

type DetailProps = React.PropsWithChildren & {
  summary: string;
  open?: boolean;
  left?: React.ReactNode;
  right?: React.ReactNode;
};

const Details = ({summary, open = false, children}: DetailProps) => {
  return (
    <details className={style.details} open={open}>
      <summary className="paragraph">{summary}</summary>
      <div className={style.detailsInner}>{children}</div>
    </details>
  );
};

export default Details;
