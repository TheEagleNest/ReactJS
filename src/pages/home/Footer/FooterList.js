import "./FooterList.css"; // liên kết file stylesheet
const FooterList = (props) => {
  const footerList = props.li; // lấy dữ liệu từ parent element
  // từ dữ liệu là 1 array dùng phương thức map để render thông tin
  return footerList.map((data) => {
    // Bên trong array footlerList là phần tử array, dùng phương thức map để render từng phần tử thuộc array con
    const listItem = data.map((item) => {
      return <li key={data.indexOf(item)}>{item}</li>;
    });
    return (
      <div key={footerList.indexOf(data)} className="ul-container">
        <ul className="list">{listItem}</ul>
      </div>
    );
  });
};
export default FooterList;
