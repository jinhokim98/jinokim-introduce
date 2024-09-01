import style from './style.module.css';

type PageTitleProps = {
  title: string;
};

const PageTitle = ({title}: PageTitleProps) => {
  return <header className={`${style.pageTitle} title primary_color`}>{title}</header>;
};

export default PageTitle;
