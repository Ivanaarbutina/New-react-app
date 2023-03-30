const Modal = () => {
  return (
    <div className="modal">
      <div className="modal__box">
        <h1>Modal Box</h1>
        <p className="modal__box__message">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br></br>{" "}
          Quos, laudantium necessitatibus maiores Itaque, consequatur error.
        </p>
        <div>
          <button className="modal__box__btn">Open</button>
          <button className="modal__box__btn2">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
