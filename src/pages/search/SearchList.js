import SearchListItem from "./SearchListItem"; // liên kết component con
import "./SearchList.css"; // liên kết stylesheet

// Lấy dữ liệu từ file json được cung cấp
const ListData = require("../../data/search.json");

const SearchList = () => {
  return (
    <div className="search-list__container">
      {/* in từ component con với prop truyền đi là dữ liệu từ file json */}
      <SearchListItem data={ListData} />
    </div>
  );
};
export default SearchList;
