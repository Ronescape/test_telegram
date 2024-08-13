
interface WebApp {
    initDataUnsafe?: {
        user?: any; // Replace `any` with a more specific type if available
    };
    showAlert(message: string): void;
}

declare global {
    interface Window {
        Telegram: {
            WebApp: TelegramWebApp;
        };
    }
}