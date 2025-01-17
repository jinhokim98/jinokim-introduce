import BANKS from '@constants/bank';
import {useState} from 'react';
import {useNavigateApp} from './useNavigateApp';
import {Link} from 'react-router-dom';

const shareObject = {
  title: '행동대장',
  text: '행동개시~~',
  url: 'https://app.haengdong.pro',
};

const buttonStyle: React.CSSProperties = {
  margin: '1rem 2rem',
  padding: '1rem 1.2rem',

  backgroundColor: '#337ea9',

  borderRadius: '1rem',

  color: 'white',
};

const Test = () => {
  const [buttonText, setButtonText] = useState('공유하기 전');
  const {navigateApp} = useNavigateApp();

  const shareLink = async () => {
    if (typeof window.navigator.share === 'undefined' || !window.navigator.canShare(shareObject)) {
      alert('OS 공유를 할 수 없는 환경입니다.');
      return;
    }

    try {
      await window.navigator.share(shareObject);
      setButtonText('공유 완료');
    } catch (error) {
      setButtonText('공유 실패');
    }
  };

  const gobithumb = () => {
    navigateApp({
      android: {
        appScheme: 'bithumb://',
        storeUrl: 'intent://details?id=com.btckorea.bithumb#Intent;scheme=market;package=com.android.vending;end;',
      },
      ios: {
        appScheme: 'bithumb://',
        storeUrl: 'https://apps.apple.com/kr/app/bithumb/id1299421592?l=en-GB',
      },
    });
  };

  const goToss = async () => {
    // const account = '국민은행 030302-04-191806 김진호 10,000원';
    // await window.navigator.clipboard.writeText(account);

    navigateApp({
      android: {
        appScheme: `supertoss://send?amount=10000&bank=${bank}&accountNo=03030204191806`,
        storeUrl: 'intent://details?id=viva.republica.toss#Intent;scheme=market;package=com.android.vending;end;',
      },
      ios: {
        appScheme: `supertoss://send?amount=10000&bank=${bank}&accountNo=03030204191806`,
        storeUrl: 'https://apps.apple.com/kr/app/%ED%86%A0%EC%8A%A4/id839333328',
      },
    });
  };

  const goKakaoPay = async () => {
    const account = '국민은행 030302-04-191806 10,000원';
    await window.navigator.clipboard.writeText(account);

    navigateApp({
      android: {
        appScheme: `kakaotalk://kakaopay/home`,
        storeUrl: 'intent://details?id=com.kakao.talk#Intent;scheme=market;package=com.android.vending;end;',
      },
      ios: {
        appScheme: `kakaotalk://kakaopay/home`,
        storeUrl: 'https://apps.apple.com/kr/app/kakaotalk/id362057947',
      },
    });
  };

  const [bank, setBank] = useState('KB국민은행');

  const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBank(event.target.value);
  };

  return (
    <div>
      <Link to={'/'}>홈으로</Link>
      <button className="subtitle" style={buttonStyle} onClick={shareLink}>
        {buttonText}
      </button>
      <button className="subtitle" style={buttonStyle} onClick={goToss}>
        {`Toss with ${bank}`}
      </button>
      <select defaultValue={'KB국민은행'} onChange={onChange}>
        {BANKS.map(bank => (
          <option key={bank.name}>{bank.name}</option>
        ))}
      </select>
      <button className="subtitle" style={buttonStyle} onClick={goKakaoPay}>
        KakaoPay
      </button>
      <button className="subtitle" style={buttonStyle} onClick={gobithumb}>
        빗썸
      </button>
    </div>
  );
};

export default Test;
