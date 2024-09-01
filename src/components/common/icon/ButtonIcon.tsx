import style from './style.module.css';

type ButtonIconProps = React.HTMLAttributes<HTMLButtonElement> & {
  Icon: React.FC<React.SVGProps<SVGElement>>;
};

const ButtonIcon = ({Icon, ...htmlButtonProps}: ButtonIconProps) => {
  return (
    <button className={style.button} {...htmlButtonProps}>
      <Icon style={{marginTop: 4}} />
    </button>
  );
};

export default ButtonIcon;
