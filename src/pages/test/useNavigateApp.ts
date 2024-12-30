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

    const timeoutId = setTimeout(() => {
      if (Date.now() - time >= 1500 && document.visibilityState === 'visible') {
        alert('앱이 설치되지 않았음');
      }
    }, 1500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [time]);

  useEffect(() => {
    const clearTime = () => {
      if (document.visibilityState === 'hidden') {
        setTime(0);
      }
    };
    document.addEventListener('visibilitychange', clearTime);
    return () => document.addEventListener('visibilitychange', clearTime);
  }, [document.visibilityState]);

  const navigateApp = ({android, ios}: NavigateAppArgs) => {
    const isIOS = /iPhone|iPad|iPod/.test(navigator.userAgent);
    const isAndroid = /Android/.test(navigator.userAgent);
    const isMobile = isIOS || isAndroid;

    if (!isMobile) {
      alert('모바일 기기에서만 앱 실행 및 설치가 가능합니다. 모바일 환경에서 접속해 주세요.');
      return;
    }

    const url = isIOS ? ios.appScheme : android.appScheme;

    setTime(0);
    setTime(Date.now());
    window.location.href = url;
  };

  return {navigateApp};
};
