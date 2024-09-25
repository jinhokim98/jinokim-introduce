import Link from '@components/common/link';
import style from './style.module.css';

const Links = () => {
  return (
    <div className={style.container}>
      <span className="label">{'Links: '}</span>
      <Link
        favicon="https://app.haengdong.pro/favicon.ico"
        href="https://app.haengdong.pro"
        text="행동대장 서비스링크"
      />
      <Link
        favicon="https://github.com/favicon.ico"
        href="https://github.com/woowacourse-teams/2024-haeng-dong"
        text="행동대장 레포지토리"
      />
    </div>
  );
};

export default Links;
