import React from 'react';

const MessageCard = ({me}) => {
    return (
        <div className={me ? 'chat-room__message my-message' : 'chat-room__message'}>
            <div className={me ? 'chat-room__message-image my-message-image' : 'chat-room__message-image'}></div>
            <div className={me ? 'chat-room__message-div my-message-div' : 'chat-room__message-div'}>
                <p className={me ? 'chat-room__message-text my-message-text' : 'chat-room__message-text'}>lorem ipsum iemi dolor laimei an fo ipsum iemi dolor laimei an fo ipsum iemi dolor laimei an fo. ipsum iemi dolor laimei an fo. ipsum iemi dolor laimei an fo</p>
                <h6 className={me ? 'chat-room__message-time my-message-time' : 'chat-room__message-time'}>12:30</h6>
            </div>
        </div>
    );
}

export default MessageCard;
