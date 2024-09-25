import style from './style.module.css';

type ButtonIconProps = React.HTMLAttributes<HTMLButtonElement> & {
  Icon: React.FC<React.SVGProps<SVGElement>>;
  displayName: string;
};

const ButtonIcon = ({Icon, displayName, ...htmlButtonProps}: ButtonIconProps) => {
  return (
    <button className={style.button} {...htmlButtonProps}>
      <div className={style.icon}>
        <Icon />
      </div>
      <p className="paragraph">{displayName}</p>
    </button>
  );
};

export default ButtonIcon;
