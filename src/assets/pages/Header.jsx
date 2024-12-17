import "./Header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { getProps } from "../../context/AppProvider";

function Header() {
  const { handleShowPostForm } = getProps();
  return (
    <header>
      <div className="header-container">
        <h1>WeeChat</h1>
        <div className="header-input">
          <SearchOutlinedIcon />
          <input placeholder="Search" type="search" />
        </div>
        <div className="header-profile">
          <button className="color-prim" onClick={handleShowPostForm}>
            Create
          </button>
          <img src="../../../public/imagess/profile-1.jpg" alt="profile" />
        </div>
      </div>
    </header>
  );
}

export default Header;
