const HomeWork = () => {
  return <div className="home">

    <div className="work--container">
      <div className="test">
        <span className="test__item">Test</span>
        <span className="test__item--red">Test</span>
        <button className="test__btn">TEST</button>
      </div>
    </div>
    <div className="work--container">
      <div className="test">
        <button className="btn btn--base btn--primary">First</button>
        <button className="btn btn--lg btn--success isActive">Second</button>
      </div>
    </div>
    <div className="work--container">
      <div className="card">
        <h3 className="card__header__title">Work</h3>
        <button className="card card__footer__btn">Work</button>
        <h4 className="card__body__title--lg">Work</h4>
      </div>
     
    </div>
    <div className="work--container">
      <div className="footer footer--sm footer__body--xl">  Footer</div>
    </div>
    
  </div>;
};

export default HomeWork;