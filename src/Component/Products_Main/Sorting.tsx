import "../../Css/Sort.css";

const Sorting = () => {
  return (
    <div className="sort">
      <div className="products-right-grid">
        <div className="products-right-grids">
          <div className="sorting">
            <select id="country" className="frm-field required sect">
              <option defaultValue="null">Default sorting</option>
              <option value="null">Sort by popularity</option>
              <option value="null">Sort by average rating</option>
              <option value="null">Sort by price</option>
            </select>
          </div>
          <div className="sorting-left">
            <select id="country1" className="frm-field required sect">
              <option value="null">Item on page 9</option>
              <option value="null">Item on page 18</option>
              <option value="null">Item on page 32</option>
              <option defaultValue="null">All</option>
            </select>
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  );
};

export default Sorting;
