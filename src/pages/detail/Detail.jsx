import React from "react";
import NavBarItem from "../home/NavBar/NavBar"; // child component container nav-bar
import Header from "../home/NavBar/Header"; // child component phần nội dung và input
import RegisterForm from "../home/Content/RegisterForm"; // child component mẫu form đăng kí thành viên
import Footer from "../home/Footer/Footer"; // child component footer
import "../home/Home.css"; // liên kết file stylesheet
import "./Detail.css";

// Lấy dữ liệu từ file json được cung cấp
const navBar = require("../../data/navBar.json");
const footer = require("../../data/footer.json");
const detailHotel = require("../../data/detail.json");

const Detail = () => {
  return (
    <div>
      {/* Khối nav bar đầu trang */}
      <div id="nav-bar">
        <div className="nav-bar">
          <div className="nav-bar__title">
            <h2 className="nav-bar-h2">Booking Website</h2>
            <div className="button">
              <button type="submit">Register</button>
              <button type="submit">Login</button>
            </div>
          </div>
          {/* components render thẻ ul cho nav-bar */}
          <NavBarItem navBar={navBar} />
        </div>
      </div>

      {/* Phần chứa thông tin khách sạn */}

      <div className="detail-container">
        {/* Phần thông tin tên, địa chỉ, khảong cách */}
        <div className="detail-info">
          <div className="detail-info__content">
            <h2>{detailHotel.name}</h2>
            <p>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              {detailHotel.address}
            </p>
            <p>{detailHotel.distance}</p>
            <p>{detailHotel.price}</p>
          </div>
          <button type="submit">Reserve or Book Now!</button>
        </div>

        {/* Phần bao gồm các hình ảnh của khách sạn */}
        <div className="detail-images">
          {detailHotel.photos.map((item) => {
            return <img key={item} src={item} />;
          })}
        </div>

        {/* Khung chứa nội dung bài viết và giá tiền */}
        <div className="detail-content">
          {/* Nội dung bài viết */}
          <div className="detail-content__description">
            <h2>{detailHotel.title}</h2>
            <p>{detailHotel.description}</p>
          </div>

          {/* Khung chứa giá tiền */}
          <div className="detail-content__night">
            <h2>Perfect for a 9-night stay!</h2>
            <p>
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!
            </p>
            <p>
              ${detailHotel.nine_night_price} <span>(9 nights)</span>
            </p>
            <button type="submit">Reserve or Book Now!</button>
          </div>
        </div>
      </div>
      {/* component render phần form đăng ký */}
      <RegisterForm />
      {/* component reder footer */}
      <Footer footer={footer} />
    </div>
  );
};

export default Detail;
