import "./SearchPopup.css"; // liên kết file stylesheet
const SearchPopup = () => {
  return (
    // Khối chung chứa các phần tử nhỏ và khối options
    <div className="search-container__popup">
      <h2>Search</h2>
      <p>Destination</p>
      <input type="text" />
      <p>Check-in Date</p>
      <input type="date" />
      <p>Options</p>

      {/* Khối options */}
      <div className="search-container__option">
        <div className="option-item">
          <p>
            Min price <span>per night</span>
          </p>
          <input type="number" />
        </div>
        <div className="option-item">
          <p>
            Max price <span>per night</span>
          </p>
          <input type="number" />
        </div>
        <div className="option-item">
          <p>Adult</p>
          <input type="number" placeholder="1" />
        </div>
        <div className="option-item">
          <p>Children</p>
          <input type="number" placeholder="0" />
        </div>
        <div className="option-item">
          <p>Room</p>
          <input type="number" placeholder="1" />
        </div>
      </div>
      <button type="submit">Search</button>
    </div>
  );
};
export default SearchPopup;
