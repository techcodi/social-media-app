import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import "./Nav.css";
function Navigation() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-user">
          <img src="/imagess/profile-1.jpg" alt="profile" />
          <p>
            <strong>User</strong>
            <i>@user</i>
          </p>
        </div>
        <ul>
          <li>
            <Link to="/">
              <HomeOutlinedIcon /> <span> Home</span>
            </Link>
          </li>
          <li>
            <Link to="/message">
              <ForumIcon /> <span>Messages</span>
            </Link>
          </li>
          <li>
            <Link to="/notification">
              <NotificationsNoneIcon /> <span>Notifications</span>
            </Link>
          </li>
          <li>
            <Link>
              <ExploreOutlinedIcon /> <span>Explore</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
