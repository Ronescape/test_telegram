import React, { useState, useEffect } from 'react';
import { initMiniApp, initMainButton, initPopup, mockTelegramEnv, parseInitData } from '@telegram-apps/sdk';

const SDKReact: React.FC = () => {

    const [mainButton] = initMainButton();
    const [miniApp] = initMiniApp();
    const popup = initPopup();

    useEffect(() => {
    }, []);

    const onShow = () => {
        console.log('Show main button!')

        mainButton.setText('Submit');
        mainButton.setTextColor('#cca233');
        mainButton.show();
        console.log('isVisible:', mainButton.isVisible);
    }
    const onLoader = () => {
        mainButton.setText('Loading');
        mainButton.showLoader();
    }

    const onClose = () => {
        miniApp.close();
    }
    const onOpenPopup = () => {
        console.log('Show popup!')
        popup
            .open({
                title: 'Hello!',
                message: 'Here is a test message.',
                buttons: [{ id: 'my-id', type: 'default', text: 'Default text' }],
            })
            .then(buttonId => {
                console.log(
                    buttonId === null
                        ? 'User did not click any button'
                        : `User clicked a button with ID "${buttonId}"`
                );
            });

        console.log('isOpened:', popup.isOpened);
    }
    return (
        <div className="w-full text-white h-full font-bold flex flex-col max-w-xl">
            <div className="relative min-h-screen loading-screen pb-7">
                <h1>SDK React</h1>
                <button className='text-xl mb-2' onClick={onShow}>Test Main Button</button><br />
                <button className='text-xl mb-2' onClick={onLoader}>Test Loader</button><br />
                <button className='text-xl mb-2' onClick={onOpenPopup}>Test Popup</button><br />
                <button className='text-xl mb-2' onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default SDKReact;