import { useTonAddress ,TonConnectButton, useTonConnectUI  } from '@tonconnect/ui-react';

export default function Airdrop () {

    const userFriendlyAddress = useTonAddress();
    const rawAddress = useTonAddress(false);
    const [tonConnectUI] = useTonConnectUI();

    const testConnect = async () =>{
        try {
            await tonConnectUI.disconnect();
        } catch (error) {
            console.log("error: "+error);
        }
    }
    return (
      <>
        <div className="w-full text-white h-full font-bold flex flex-col max-w-xl ">
          <div className="relative min-h-screen loading-screen pb-7">
          <h1>Airdrop</h1>
          <TonConnectButton className="my-button-class" style={{ float: "right" }}/>
          <div>
            <div className="text-gray-700">Task List</div>
                <div>
                    {userFriendlyAddress ? (
                        <>
                            <button
                            className="w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded">
                                {userFriendlyAddress}
                            </button>                      
                        </>
                    ):
                    (
                        <>
                        <TonConnectButton className="w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded"
                        />
                        </>
                    )}
                </div>       
            </div>          
          </div>
        </div>
      </>
    )
  }
  