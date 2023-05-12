import "./RegisterForm.css"; // liên kết stylesheet
const RegisterForm = () => {
  return (
    <div className="register-container">
      <h1>Save time, save money!</h1>
      <p>Sign up and we'll send the best deals for you</p>
      <div className="register-info">
        {/* khung input phải là dạng email */}
        <input type="email" placeholder="Your Email" />
        <button type="submit">Subscribe</button>
      </div>
    </div>
  );
};
export default RegisterForm;
