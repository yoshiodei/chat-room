import React from 'react';

const ChatText = ({me, data, children}) => {
    return (
        <div className={me ? 'chat__text chat__text--me' : 'chat__text'}>
            <h5 className='chat__username'>{data.userName}</h5>
            <p className='chat__message'>{children}</p>
            <h6 className='chat__time'>{data.time}</h6>
        </div>
    );
}

export default ChatText;
