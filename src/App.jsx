import './App.css';
import {ChatEngine} from "react-chat-engine"
import ChatFeed from './components/ChatFeed'
let App = () => {
  return ( 
    <ChatEngine height="100vh"
            projectID="5915c4d9-9753-435c-ae64-55ee1d813fdc"
            userName="ibrahim"
            userSecret="123" 
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
            />
   );
}


export default App;