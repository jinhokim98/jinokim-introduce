import {useState} from 'react';

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

  const goToss = async () => {
    // const account = '국민은행 030302-04-191806 김진호 10,000원';
    // await window.navigator.clipboard.writeText(account);

    const url = 'supertoss://send?amount=10000&bank=KB국민은행&accountNo=030302-04-191806';
    window.location.href = url;
  };

  const goKakaoPay = async () => {
    const account = '국민은행 030302-04-191806 김진호 10,000원';
    await window.navigator.clipboard.writeText(account);

    const kakaoPayUrl = 'kakaotalk://kakaopay/home';
    alert(kakaoPayUrl);
    const url = 'send?amount=10000&bank=KB국민은행&accountNo=030302-04-191806';
    window.location.href = kakaoPayUrl;
  };

  return (
    <div>
      <button className="subtitle" style={buttonStyle} onClick={shareLink}>
        {buttonText}
      </button>
      <button className="subtitle" style={buttonStyle} onClick={goToss}>
        Toss
      </button>
      <button className="subtitle" style={buttonStyle} onClick={goKakaoPay}>
        KakaoPay
      </button>
    </div>
  );
};

export default Test;
