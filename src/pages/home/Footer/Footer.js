import "./Footer.css"; // liên kết file stylesheet
import FooterList from "./FooterList";
const Footer = (props) => {
  const FooterData = props.footer; // lấy dữ liệu từ parent component
  const FooterLi = FooterData.map((data) => data.col_values); // dùng phương thức map để render thông tin từ array lấy từ parent component
  console.log(FooterLi);
  return (
    <div className="footer">
      <FooterList li={FooterLi} />
    </div>
  );
};
export default Footer;
