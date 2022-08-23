import React from 'react';
import '../styles/chat-room.css';
import MessageCard from './MessageCard';

const ChatRoom = () => {
    return (
        <div className='chat-room'>
            <header className='chat-room__header'>
                <div className='chat-room__image'></div>
                <h3 className='chat-room__username'>Kwame Bini</h3>
            </header>
            <main className='chat-room__main'>
                <MessageCard me={true}/>
                <MessageCard />
            </main>
            <footer className='chat-room__footer'>
                <textarea className='chat-room__text-area'></textarea>
                <button className='chat-room__button'>Send</button>
            </footer >
        </div>
    );
}

export default ChatRoom;
