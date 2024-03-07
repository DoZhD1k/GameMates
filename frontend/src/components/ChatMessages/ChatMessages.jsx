// import React from 'react'
// import "./ChatMessages.css"
// import chatMessages from '../../assets/DataJs/chatMessages'

// const ChatMessages = () => {
//   return (
//     <div className="msg_card_body">
//         <div className='msg_container_with_img'>
//             <div className="img_cont_msg">
//                 <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" alt='adad' className="rounded-circle user_img_msg" />
//             </div>
//             <div className="msg_cotainer">
//                 Hi, how are you samim?
//                 <span className="msg_time">8:40 AM, Today</span>
//             </div>
//         </div>

//         <div className='msg_container_send_with_img'>
//             <div className="msg_cotainer_send">
//                 Hi Khalid i am good tnx how about you?
//                 <span className="msg_time_send">8:55 AM, Today</span>
//             </div>
//             <div className="img_cont_msg">
//                 <img src="https://avatars.hsoubcdn.com/ed57f9e6329993084a436b89498b6088?s=256" alt='adawd' className="rounded-circle user_img_msg" />
//             </div>
//         </div>
//     </div> 
//   )
// }

// export default ChatMessages



import React from 'react';
import "./ChatMessages.css";
import chatMessages from '../../assets/DataJs/chatMessages';

const ChatMessages = () => {
  return (
    <div className="msg_card_body">
      {chatMessages.map((message, index) => (
        <div
          key={index}
          className={`msg_container_${index % 2 === 0 ? 'with' : 'send_with'}_img`}
        >
          {index % 2 === 0 ? (
            <>
              <div className="img_cont_msg">
                <img
                  src={`https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg`}
                  alt="user"
                  className="rounded-circle user_img_msg"
                />
              </div>
              <div className="msg_cotainer">
                {message.messageText}
                <span className="msg_time">8:40 AM, Today</span>
              </div>
            </>
          ) : (
            <>
              <div className="msg_cotainer_send">
                {message.messageSendText}
                <span className="msg_time_send">8:55 AM, Today</span>
              </div>
              <div className="img_cont_msg">
                <img
                  src={`https://avatars.hsoubcdn.com/ed57f9e6329993084a436b89498b6088?s=256`}
                  alt="user"
                  className="rounded-circle user_img_msg"
                />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ChatMessages;
