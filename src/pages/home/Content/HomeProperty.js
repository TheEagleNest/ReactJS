import "./HomeProperty.css"; // liên kết file stylesheet
const Property = (props) => {
  const type = props.type; // lấy dữ liệu từ parent component
  return (
    <div className="home-property">
      <h1>Browse by property type</h1>
      <div className="home-property__items">
        {/* từ dữ liệu lấy được là 1 array, dùng phương thức map để render thông tin */}

        {type.map((data) => {
          return (
            <div key={data.image} className="home-property__item">
              <img src={data.image} />
              <h2>{data.name}</h2>
              <p>{`${data.count} hotels`}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Property;
