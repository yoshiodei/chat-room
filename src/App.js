import JoinChat from './JoinChat.jsx';
import './Test.js';
import io from 'socket.io-client';
import ChatPage from './chatPage/index.js';
import { Route, Routes } from 'react-router-dom';
import SignUp from './authPage/SignUp.jsx';
import SignIn from './authPage/SignIn.jsx';

// const socket = io.connect("http://localhost:4000"); 

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/:userId' element={<ChatPage />} />
      </Routes> 
    </div>
  );
}

export default App;
