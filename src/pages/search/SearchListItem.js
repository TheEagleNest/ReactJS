import "./SearchListItem.css"; // liên kết file stylesheet
const SearchListItem = (props) => {
  const ItemData = props.data; // lấy dữ liệu từ parent component
  return (
    <div>
      {/* từ dữ liệu trả về là 1 array -> dùng phương thức map render thông tin từng khách sạn */}
      {ItemData.map((item) => {
        return (
          // Khối chứa thông tin từng khách sạn gồm 3 khối nhỏ là hình ảnh, nội dung và giá tiền
          <div key={item.distance} className="search-item__container">
            {/* Khối hình ảnh */}
            <img src={item.image_url} />

            {/* Khối nội dung */}
            <div className="search-item__content">
              <h2>{item.name}</h2>
              <p>{item.distance} from center</p>
              <p>{item.tag}</p>
              <p style={{ fontWeight: "bold" }}>{item.description}</p>
              <p>{item.type}</p>
              <p
                className="search-item__cancel"
                style={{ fontWeight: "bold", color: "green" }}
              >
                {item.free_cancel ? "Free cancellation" : ""}
              </p>
              <p style={{ color: "green" }}>
                {item.free_cancel
                  ? "You can cancel later, so lock in this great price today!"
                  : ""}
              </p>
            </div>

            {/* Khối giá tiền gồm 2 khối con: xếp hạng và giá tiền */}
            <div className="search-item__score">
              {/* Khối xếp hạng */}
              <div className="search-item__rate">
                <p>{item.rate_text}</p>
                <p>{item.rate}</p>
              </div>

              {/* Khối giá tiền */}
              <div className="search-item__price">
                <p>${item.price}</p>
                <p>Includes taxes and fees</p>
                <button type="submit">See availability</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SearchListItem;
