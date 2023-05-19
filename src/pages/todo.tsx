import  { useState } from "react";
import XMark from "./../assets/x-mark.svg";
import Check from "./../assets/check.svg";
type ListItemType = {
  label: string;
  id: number;
  done: boolean; 
};

const initialList: ListItemType[] = [
  {
    id:0,
    label:"Nauci React",
    done:false,
  },
  {
    id:1,
    label:"Nauci CSS",
    done:false,
  },
];

const Vjezba1705 = () => {

  const [listItems, setListItems] = useState<ListItemType[]>(initialList);;//lista
  const [inputValue, setInputValue] = useState<string>("");//vrijednost unosa
 
  const handleAdd = () => {
    const newListItem = {
      id: listItems.length + 1,
      label: inputValue,
      done:false,
    };

   //lista(kopiranje stare liste i dodavanje nove)
    setListItems([...listItems, newListItem]);
    setInputValue("");
  };

  //brisanje liste 
  const deleteItem = (id:number) => {
    const newlist = listItems.filter((listItem) => listItem.id !== id);// !==id vraca sve u listu osim odabranog id-a
    setListItems(newlist);
  };

//dodavanje check opcije
  const handleCheck = (id:number) => {
    const newList = listItems.map((listItem) => {
      if (listItem.id === id) {
        return { ...listItem, done:true};
      }
      return listItem;
    });
    setListItems(newList);
  };
  

  return (
    <div className="container">
      <h2>To Do List</h2>
      <div className="todo__box">
        <div className="todo">
        <input 
          className="todo__input"
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
        />
        <button className="todo__button" onClick={() => handleAdd()}>
          Add
        </button>
        </div>
        <div className="todo__list">
          {listItems.map((listItem: ListItemType) =>{
            return (
              <div className="todo__info" key={listItem.id}>
                {listItem.done ? <img className="todo__check" src={Check}/> : ""}
                <div className="todo__label" onClick={() => handleCheck(listItem.id)}>
                  {listItem.label}
                </div>
                <div
                  onClick={() => deleteItem(listItem.id)}
                >
                  <img className="todo__close" src={XMark}/>
                </div>
              </div> 
            );
          })}
        </div>
      </div>
     
    </div>
  );
};

export default Vjezba1705;
