import React,{ useState, useEffect } from 'react';
import ChatText from './ChatText';
import Scroll from 'react-scroll-to-bottom';

const Chat = ({socket, roomId, userName}) => {

    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState([]);

    const handleSendMessage = () => {
        if(message.trim()){
            let data = {
                roomId,
                message,
                userName,
                time: `${new Date().getHours()}:${new Date().getMinutes()}`
            };
            socket.emit("send_message", data);
            setMessageList((previousMessage) => [...previousMessage, data]);
            setMessage('');
        }
    }

    useEffect(()=>{
        socket.on("receive_message", (data)=>{
            setMessageList((previousMessage) => [...previousMessage, data]);
        });
    },[socket]);

    return (
        <div className="chat">
            <div className="chat__header">
                <h3>Live Chat Room</h3>
            </div>

                
            <div className="chat__body">
                 <Scroll className="scroll">
                {messageList.map(data => (
                    <ChatText 
                      me={userName == data.userName}
                      data={data}
                     >{data.message}</ChatText>
                ))}
                </Scroll>
            </div>

            <div className="chat__footer">
                <div className='chat__footer-div'>
                    <input className="chat__input"
                           value={message}
                           onChange={(e)=> setMessage(e.target.value)}
                           onKeyPress={(e)=> {e.key === 'Enter' && handleSendMessage()}}
                    />
                    <button className="chat__button" 
                            onClick={handleSendMessage}
                            
                    >
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chat;
