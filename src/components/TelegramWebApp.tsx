import React, { useEffect } from 'react';

const TelegramWebApp: React.FC = () => {
  useEffect(() => {
    // Function to load the Telegram Web App script
    const loadTelegramScript = () => {
      const script = document.createElement('script');
      script.src = 'https://telegram.org/js/telegram-web-app.js';
      script.async = true;
      document.body.appendChild(script);
      
      script.onload = () => {
        // Initialize the Telegram Web App
        if (window.Telegram !== undefined) {
          window.Telegram.WebApp.init();

          // const telegramUser = window.Telegram.WebApp.initDataUnsafe;
        }
      };

      // Clean up script on component unmount
      return () => {
        document.body.removeChild(script);
      };
    };

    loadTelegramScript();
  }, []);

  return (
    <div>
      {/* Your component code here */}
    </div>
  );
};

export default TelegramWebApp;
