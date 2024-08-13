// src/telegram-web-app.d.ts
interface TelegramWebApp {
    init: () => void;
    // Add other Telegram Web App methods and properties here if needed
  }
  
  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }