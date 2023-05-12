import "./HotelDetails.css"; // liên kết file stylesheet
const HotelDetails = (props) => {
  const hotelList = props.hotellist; // lưu dữ liệu từ prop của parent component
  // Hàm xử lý sự kiện click vào tên khách sạn
  const OnClickHotel = () => {
    return location.replace("../detail");
  };
  // Xử lý dữ liệu được in ra
  return (
    <div className="hotel-list__container">
      <h1>Homes guests love</h1>
      <div className="hotel-list__details">
        {/* từ mảng dữ liệu lấy từ prop, sử dụng phương thức map để xuất ra mảng mới và thay đổi nội dung phần tử */}
        {hotelList.map((data) => {
          return (
            <div key={data.name}>
              <img className="hotel-list__image" src={data.image_url} />
              <div className="hotel-list__content">
                <h2 className="hotel-list__name" onClick={OnClickHotel}>
                  {data.name}
                </h2>
                <p className="hotel-list__city">{data.city}</p>
                <p className="hotel-list__price">Starting from ${data.price}</p>
                <div className="hotel-list__ranking">
                  <p className="hotel-list__rate">{data.rate}</p>
                  <p className="hotel-list__type">{data.type}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default HotelDetails;
