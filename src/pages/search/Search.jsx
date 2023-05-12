import React from "react";
import NavBarItem from "../home/NavBar/NavBar"; // child component container nav-bar
import Header from "../home/NavBar/Header"; // child component phần nội dung và input
import SearchPopup from "./SearchPopup"; // child component khung search
import SearchList from "./SearchList"; // child component kết quả tìm kiếm
import RegisterForm from "../home/Content/RegisterForm"; // child component mẫu form đăng kí thành viên
import Footer from "../home/Footer/Footer"; // child component footer
import "../home/Home.css"; // liên kết file stylesheet
import "./Search.css";

// Lấy dữ liệu từ fle json được cung cấp
const navBar = require("../../data/navBar.json");
const footer = require("../../data/footer.json");

const Search = () => {
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
        </div>
      </div>
      <div className="search-container">
        <SearchPopup />
        <SearchList />
      </div>
      {/* component render phần form đăng ký */}
      <RegisterForm />
      {/* component reder footer */}
      <Footer footer={footer} />
    </div>
  );
};
export default Search;
