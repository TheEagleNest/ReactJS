import React, { useState, useEffect } from "react";
import NavBarItem from "./NavBar/NavBar"; // child component Nav bar
import Header from "./NavBar/Header"; // child component input navbar
import HomeContent from "./Content/HomeContent"; // child component thông tin thành phố
import Property from "./Content/HomeProperty"; // child component thông tin các loại hình khách sạn/ nhà nghỉ
import HotelDetails from "./Content/HotelDetails"; // child component thông tin của từng khách sạn
import RegisterForm from "./Content/RegisterForm"; // child component mẫu form đăng kí thành viên
import Footer from "./Footer/Footer"; // child component footer
import "./Home.css"; // liên kết file stylesheet

// Lấy dữ liệu từ file json data
const navBar = require("../../data/navBar.json");
const CityList = require("../../data/city.json");
const type = require("../../data/type.json");
const hotelList = require("../../data/hotel_list.json");
const footer = require("../../data/footer.json");

const Home = () => {
  return (
    // khối div chung bao toàn bộ body
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
          {/* component tiêu đề container nav-bar và khung input */}
          <Header />
        </div>
      </div>
      {/* component render hình ảnh và thông tin thành phố */}
      <HomeContent city={CityList} />
      {/* component render các loại hình khách sạn */}
      <Property type={type} />
      {/* component render thông tin chi tiết từng khách sạn */}
      <HotelDetails hotellist={hotelList} />
      {/* component render phần form đăng ký */}
      <RegisterForm />
      {/* component reder footer */}
      <Footer footer={footer} />
    </div>
  );
};

export default Home;
