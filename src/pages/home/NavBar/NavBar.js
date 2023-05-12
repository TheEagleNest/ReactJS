import "./NavBar.css"; // liên kết file stylesheet
const NavBarItem = (props) => {
  const dataNavBar = props.navBar; // lấy dữ liệu từ parent component
  return (
    <ul className="nav-bar__list">
      {/* Từ dữ liệu là 1 array, dùng phương thức map để render */}
      {dataNavBar.map((data) => {
        return (
          <li key={data.type} className="nav-bar__selected">
            <i className={`fa ${data.icon}`} aria-hidden={data.active}></i>
            <span>{data.type}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default NavBarItem;
