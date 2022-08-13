import React, { useState } from 'react';
import Chat from './Chat';

const JoinChat = ({socket}) => {

    const [userName, setUserName] = useState('');
    const [roomId, setRoomId] = useState('');
    const [isJoined, setIsJoined] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(roomId && userName) {
            socket.emit("join_room", roomId);
            setIsJoined(true);
        }
    }

    return (
        <>
        {!isJoined && (<form className='form' onSubmit={(e)=> handleSubmit(e)}>
            <button type="submit" className='form__button'>Join Chat</button>
            <input  className='form__input' 
                    placeholder='enter username' 
                    value={userName}
                    onChange={(e)=> setUserName(e.target.value)}
                    />
            <input className='form__input' 
                   placeholder='enter room id' 
                   value={roomId}
                   onChange={(e)=> setRoomId(e.target.value)}
                   />
        </form>)}
        {isJoined && (<Chat socket={socket} userName={userName} roomId={roomId} />)}
        </>
    );
}

export default JoinChat;
