import style from './style.module.css';

type OlProps = React.HTMLAttributes<HTMLOListElement> & {
  order: number;
  text: string;
};

const Ol = ({children, order, text, ...props}: OlProps) => {
  return (
    <ol {...props}>
      <div className={style.orderStyle}>
        <span className="label">{`${order}.`}</span>
        <p className="label">{text}</p>
      </div>
      {children}
    </ol>
  );
};

export default Ol;
