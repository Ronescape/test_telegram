import { useCallback, useEffect } from 'react';
import './App.css';
import SdkReact from './SdkReact/SdkReact';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import TonManifest from './tonconnect-manifest.json';
import { SDKProvider } from '@telegram-apps/sdk-react';
import { useNavigate } from "react-router-dom";
import { initMiniApp, mockTelegramEnv, parseInitData } from '@telegram-apps/sdk';

function App() {

    const [miniApp] = initMiniApp();
    const navigate = useNavigate();

    const onBackClick = useCallback(() => {
        navigate(-1)
    }, [navigate])

    useEffect(() => {
      
    }, [])

    return (
        <SDKProvider acceptCustomStyles debug>
            <TonConnectUIProvider manifestUrl={TonManifest.manifestUrl}>
                <div className="App">
                    <header className="App-header">
                        <SdkReact />
                    </header>
                </div>
            </TonConnectUIProvider>
        </SDKProvider>
    );
}

export default App;
