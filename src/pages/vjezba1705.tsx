// import React, { useState } from "react";
// //

// type ListItemType = {
//   text: string;
//   id: number;
//   done: boolean;

// };

// const Vjezba1705 = () => {
//   const [listItems, setListItems] = useState<ListItemType[]>([]);
//   const [inputText, setInputText] = useState<string>("");

//   const handleList = () => {

//   //   const newMessage: Mes = { text: inputText };
//   //   setMessages([...messages, newMessage]);
//   //   setInputText("");
//   // };

//   return (
//     <div className="container">
//       <h2>To do List</h2>
//       <div>
//         <div className="to-do-list">
//           {listItems.map((message, index) => (
//             <div key={index} className="to-do-info">
//               <p>{message.text}</p>
//             //
//             </div>
//           ))}
//         </div>

//           <input
//             type="text"
//             placeholder="Type a text"
//             value={inputText}
//             onChange={(event) => setInputText(event.target.value)}
//           />
//           <button onClick={()=> handleList} type="submit">Send</button>

//       </div>
//     </div>
//   );
// };

// export default Vjezba1705;}
