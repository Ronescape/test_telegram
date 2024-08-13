import axios from 'axios';
import { useState, useEffect} from 'react';
import { RWebShare } from "react-web-share";
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import TelegramWebApp from './TelegramWebApp';

export default function InviteFriends () {

  const [tele, setTele] = useState("");
  useEffect(() => {
    (async () => {

    })();
  }, [])

  
  const openTelegramLink = () => {
    const url = 'https://t.me/Broderrbro_bot';

    window.open(url, '_blank');
  };

  const openTelegramShare = () => {
    const telegramURL = `tg://msg_url?url=${encodeURIComponent('https://example.com')}`;
  
    // Open the Telegram share URL in a popup window
    window.open(telegramURL, '_blank');
  };
  
  const [inviteUrl, setInviteUrl] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {

  }, []);

  useEffect(() => {
    const newMessage = `Play with me, become cryptoexchange CEO and get a token airdrop!\n💸 +2k Coins as a first-time gift\n🔥 +25k Coins if you have Telegram Premium`;
    setMessage(newMessage);
    setInviteUrl("https://t.me/hktapbot");
  }, []);


  const shareContent = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Share Example',
          text: 'Check out this cool website!',
          url: 'https://t.me/hktapbot',
        });
        console.log('Successfully shared');
      } else {
        console.log('Native sharing not supported');
        // Handle fallback to other sharing methods
      }
    } catch (error) {
      console.error('Error sharing:', error);
      // Handle error
    }
  };

  const handleTest1 = () => {

  }

  return (
    <>
      <div className="w-full text-white h-full font-bold flex flex-col max-w-xl ">
        <div className="relative min-h-screen loading-screen pb-7">
        <h1>Invite Friends</h1>
        {tele && (
          <a>
            Result: {tele} <br/>
          </a>
        )}
        <TelegramWebApp />
        <a href={`https://telegram.me/share/url?url=${encodeURIComponent(inviteUrl)}&text=${encodeURIComponent(message)}`}
           className="col-span-4 bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded text-md font-semibold w-[270px]"
        >
            Invite a friend
        </a>
        <br/>
        <a href="https://t.me/share/url?url=https://t.me/hktapbot&text=text">
          Share Me
        </a>
        <br/>

        {/* <h2>@hktapbot</h2>
        <br/>
        <a href="@hktapbot">@hktapbot</a>
        <br/>
        <button
          className="w-full  mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded"
          onClick={shareContent}
          >
            Share
        </button> 
        <br/>
        <RWebShare
            data={{
              text: "Like humans, flamingos make friends for life",
              url: "https://on.natgeo.com/2zHaNup",
              title: "Flamingos",
            }}
            sites={["telegram"]}
            onClick={() => console.log("shared successfully!")}
          
          >
            <button>Share 🔗</button>
        </RWebShare> */}
        </div>
      </div>
    </>
  )
}
