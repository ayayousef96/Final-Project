import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const { roomID } =useParams();
    const meeting = async (element) => {
        const appID = 158590082;
        const serverSecret = "74160926a2dbd0918b32374fce1baa34";
        const userid = Date.now().toString();
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID,
            serverSecret,
            roomID,
            userid,
            "MathWithAya"
        );

        const zp= ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                  name: 'Personal link',
                  url:
                   window.location.protocol + '//' + 
                   window.location.host + window.location.pathname +
                    '?roomID=' +
                    roomID,
                },
              ],
            scenario: {
              mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
          });
    

    }
    return (
        <div ref={meeting} style={{width:"100vw",height:"100vh"}}>
        
        </div>
    );
}

export default Room;
