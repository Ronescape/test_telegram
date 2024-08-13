// Define or extend types directly within this file
declare global {
    interface User {
        id?: number;
        first_name?: string;
        last_name?: string;
        username?: string;
    }

    interface InitDataUnsafe {
        user?: User;
    }

    interface WebApp {
        // @ts-ignore
        initDataUnsafe?: InitDataUnsafe;
        showAlert(message: string): void;
        // Add other properties and methods if needed
    }

    interface Window {
        // @ts-ignore
        Telegram?: {
            WebApp?: WebApp;
        };
    }
}

// Ensure the global declarations are picked up by TypeScript
export function useTelegram() {
    // Check if `window.Telegram` and `window.Telegram.WebApp` are defined
    if (!window.Telegram || !window.Telegram.WebApp) {
        console.log('Warning: Telegram or WebApp object is not available on the window');
        return {
            webApp: undefined,
            user: undefined,
            onArgumentResult: () => {},
            onResult: () => {},
            onReceivedEvent: () => {},
            executeArgumentMethod: () => {},
            executeMethod: () => {}
        };
    }

    // Use type assertion to inform TypeScript about the expected type
    // @ts-ignore
    const webApp = window.Telegram.WebApp as WebApp;

    // Safely access `initDataUnsafe` property
    const user = webApp.initDataUnsafe?.user;

    // Define callback functions
    const onArgumentResult = (functionName: string, argument: string, result: string) => {
        webApp.showAlert(`${functionName}(${argument}) returned ${result}`);
    };

    const onResult = (functionName: string, result: string) => {
        onArgumentResult(functionName, '', result);
    };

    const onReceivedEvent = (event: string, data: string) => {
        webApp.showAlert(`received event(${event}) with data(${data})`);
    };

    // Call a method on webApp while handling errors
    const executeArgumentMethod = (
        methodName: string,
        argument: string,
        method: () => any,
        ignoreAlert: boolean = false
    ) => {
        try {
            const result = method();
            if (!ignoreAlert) {
                const wrappedResult = `Result: ${result}`;
                onArgumentResult(methodName, argument, wrappedResult);
            }
        } catch (error) {
            onArgumentResult(methodName, argument, String(error));
        }
    };

    const executeMethod = (methodName: string, method: () => any, ignoreAlert: boolean = false) => {
        executeArgumentMethod(methodName, '', method, ignoreAlert);
    };

    return {
        webApp,
        user,
        onArgumentResult,
        onResult,
        onReceivedEvent,
        executeArgumentMethod,
        executeMethod
    };
}
