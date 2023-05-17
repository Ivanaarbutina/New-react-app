import React, { useState } from "react";
import XMark from "./../assets/x-mark.svg";

type Message = {
  text: string;
  id: number;
  done: boolean;
  
};

const Vjezba1705 = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>("");

  const handleList = (event: React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newMessage: Message = { text: inputText };
    setMessages([...messages, newMessage]);
    setInputText("");
  };

  const list = document.getElementsByClassName("to-do-list");
   list.addEventListener('click',function(ev) )

  return (
    <div className="container">
      <h2>To do List</h2>
      <div>
        <div className="to-do-list">
          {messages.map((message, index) => (
            <div key={index} className="to-do-info">
              <p>{message.text}</p>
              <img className="close" src={XMark} />
            </div>
          ))}
        </div>
        <form className="list_message" onSubmit={handleList}>
          <input
            type="text"
            placeholder="Type a text"
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Vjezba1705;
