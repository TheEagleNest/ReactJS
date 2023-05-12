import "./Header.css"; // liên kết file stylesheet
const Header = () => {
  // hàm xử lý sự kiện click nút Search và chuyển về trang tìm kiếm
  const OnClickSearch = () => {
    return location.replace("../search");
  };
  return (
    <div className="header">
      {/* Phần tiêu đề */}
      <h1>A lifetime of discounts? It's Genius.</h1>
      <h2 className="header-h2">
        Get reward for your travels - unlock instant savings of 10% or more with
        a free account
      </h2>
      <button type="submit">Sign in/Register</button>
      {/* Phần bao gồm các thẻ input */}
      <div className="header-input">
        <input
          type="text"
          placeholder="&#xF236;  Where are you going?"
          className="
        fa fa-bed"
        />
        <input type="date" />
        <input
          type="text"
          placeholder="&#xf183;  adult・0 children・1 room"
          className="fa fa-male"
        />
        <button type="submit" onClick={OnClickSearch}>
          Search
        </button>
      </div>
    </div>
  );
};
export default Header;
