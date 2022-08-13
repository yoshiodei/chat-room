import JoinChat from './JoinChat.jsx';
import './Test.js';
import io from 'socket.io-client';

const socket = io.connect("http://localhost:4000"); 

function App() {
  return (
    <div className="App">
      <JoinChat socket={socket} />
    </div>
  );
}

export default App;
