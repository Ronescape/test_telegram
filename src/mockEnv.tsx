import { mockTelegramEnv, parseInitData, retrieveLaunchParams } from '@telegram-apps/sdk-react';

// It is important, to mock the environment only for development purposes.
if (process.env.REACT_APP_DEV === 'true') {
  let shouldMock: boolean;

  // Try to extract launch parameters to check if the current environment is Telegram-based.
  try {
    // If we are able to extract launch parameters, it means that we are already in the
    // Telegram environment. So, there is no need to mock it.
    retrieveLaunchParams();

    // We could previously mock the environment. In case we did, we should do it again. The reason
    // is the page could be reloaded, and we should apply mock again, because mocking also
    // enables modifying the window object.
    shouldMock = !!sessionStorage.getItem('____mocked');
  } catch (e) {
    shouldMock = true;
  }

  if (shouldMock) {
    const initDataRaw = new URLSearchParams([
      ['user', JSON.stringify({
        id: Number(process.env.REACT_APP_TG_USER_ID),
        first_name: process.env.REACT_APP_TG_FIRST_NAME!,
        last_name: process.env.REACT_APP_TG_LAST_NAME!,
        username: process.env.REACT_APP_TG_USERNAME!,
        language_code: process.env.REACT_APP_TG_LANGUAGE_CODE!,
        is_premium: process.env.REACT_APP_TG_IS_PREMIUM === 'true',
        allows_write_to_pm: process.env.REACT_APP_TG_ALL_WRITES_TO_PM === 'true',
      })],
      ['hash', process.env.REACT_APP_TG_HASH!],
      ['auth_date', process.env.REACT_APP_TG_AUTH_DATE!],
      ['start_param', process.env.REACT_APP_TG_START_PARAM!],
      ['chat_type', process.env.REACT_APP_TG_CHAT_TYPE!],
      ['chat_instance', process.env.REACT_APP_TG_CHAT_INSTANCE!],
    ]).toString();

    mockTelegramEnv({
      themeParams: {
        accentTextColor: '#6ab2f2',
        bgColor: '#17212b',
        buttonColor: '#5288c1',
        buttonTextColor: '#ffffff',
        destructiveTextColor: '#ec3942',
        headerBgColor: '#17212b',
        hintColor: '#708499',
        linkColor: '#6ab3f3',
        secondaryBgColor: '#232e3c',
        sectionBgColor: '#17212b',
        sectionHeaderTextColor: '#6ab3f3',
        subtitleTextColor: '#708499',
        textColor: '#f5f5f5',
      },
      initData: parseInitData(initDataRaw),
      initDataRaw,
      version: '7.2',
      platform: 'tdesktop',
    });
    sessionStorage.setItem('____mocked', '1');

    console.info(
      'As long as the current environment was not considered as the Telegram-based one, it was mocked. Take a note, that you should not do it in production and current behavior is only specific to the development process. Environment mocking is also applied only in development mode. So, after building the application, you will not see this behavior and related warning, leading to crashing the application outside Telegram.',
    );
  }
}
