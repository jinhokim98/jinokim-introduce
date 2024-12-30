import {useEffect, useState} from 'react';

type NavigateAppArgs = {
  android: AppUrl;
  ios: AppUrl;
};

type AppUrl = {
  appScheme: string;
  storeUrl: string;
};

export const useNavigateApp = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (time === 0) return;

    setTimeout(() => {
      if (Date.now() - time < 1500 && document.visibilityState === 'visible') {
        // toast로 알려줘도 좋을 듯
        alert('앱이 설치되지 않았음');
      }
    }, 1000);
  }, [time]);

  const navigateApp = ({android, ios}: NavigateAppArgs) => {
    const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    const isMobile = isIOS || isAndroid;

    if (!isMobile) {
      alert('모바일 기기에서만 앱 실행 및 설치가 가능합니다. 모바일 환경에서 접속해 주세요.');
      return;
    }

    const url = isIOS ? ios.appScheme : android.appScheme;

    setTime(Date.now());
    window.location.href = url;
  };

  return {navigateApp};
};
