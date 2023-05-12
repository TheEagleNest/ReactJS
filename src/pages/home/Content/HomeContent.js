const HomeContent = (props) => {
  const CityList = props.city; // lấy dữ liệu từ parent component

  // stylesheet

  //container chứa toàn bộ các thành phố
  const cityStyle = {
    width: "873.65px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "17px auto",
    paddingLeft: "13px",
  };

  // container chứa thông tin từng thành phố
  const cityStyleItem = {
    width: "100%",
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  };
  const imgStyle = {
    width: "95%",
    height: "200px",
    borderRadius: "20px",
  };
  const contentStyle = {
    color: "white",
    position: "absolute",
    bottom: "20px",
    left: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  };
  return (
    <div style={cityStyle}>
      {/* từ dữ liệu trả về là 1 array -> dùng phương thức map để render thông tin */}
      {CityList.map((city) => {
        return (
          <div key={city.subText} style={cityStyleItem}>
            <img src={city.image} style={imgStyle} />
            <div style={contentStyle}>
              <h2>{city.name}</h2>
              <p>{city.subText}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default HomeContent;
