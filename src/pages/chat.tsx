import { useState } from "react";
import ChatBubble from "./../assets/chat-bubble.png";

type Message ={
  text:string;
  user:string;
}

const Chat = () => {

  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>('');


  const handleSendMessage = (event:React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newMessage: Message = { text: inputText, user: 'me' };
    setMessages([...messages, newMessage]);
    setInputText('');
  }

  return(
    <div className="container">
      <h2>My Chat</h2>
      <div className="chat-container">
        <div className="chat-container__header">
        <img className="chat-container__img"
        src={ChatBubble}/>
        <h3>Fabulous Chat :)</h3>
        </div>
     
       
        <div className="message-list">
          {messages.map((message, index) => (
            <div key={index}>
              <small className="message-list__user">{message.user}</small>
              <p>{message.text}</p>
            </div>
          ))}
        </div>
        <form className="message" onSubmit={handleSendMessage}>
          <input 
            type="text"
            placeholder="Type a message..."
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          />
          <button type="submit" className="message-input button">Send</button>
        </form>
      </div>
   
    </div>
  );
};

export default Chat;