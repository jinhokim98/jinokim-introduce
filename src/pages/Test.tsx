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
    console.log();

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

  return (
    <button className="subtitle" style={buttonStyle} onClick={shareLink}>
      {buttonText}
    </button>
  );
};

export default Test;
