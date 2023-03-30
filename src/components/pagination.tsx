import doubleArow from "./../assets/double-arow.svg";
import doubleRight from "./../assets/double-right.svg";
const Pagination = () => {
  return (
    <div className="pagination">
    <a href="#"><img src={doubleArow} alt="previous page" /></a>
    <a href="#" className="pagination__number">1</a>
    <a href="#" className="pagination__number">2</a>
    <a href="#" className="pagination__number">3</a>
    <a href="#" className="pagination__number">4</a>
    <a href="#" className="pagination__number">5</a>
    <a href="#"><img src={doubleRight} alt="next page" /></a>
</div>
  );
};

export default Pagination;
