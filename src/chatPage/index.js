import React from 'react';
import ChatRoom from './components/ChatRoom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import UsersList from './components/UsersList';
import './styles/main.css';

const ChatPage = () => {
    return (
        <div className='container-div'>
            <Navbar />
            <main className='main'>
                <UsersList />
                <ChatRoom />
            </main>
            <Footer />
        </div>
    );
}

export default ChatPage;
