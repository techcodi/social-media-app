import { getProps } from "../context/AppProvider";
import "./PostForm.css";
import PublicIcon from "@mui/icons-material/Public";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
function PostForm() {
  const {
    handlePost,
    text,
    setText,
    post,
    uplaodImage,
    handleUpLoadImage,
    closeForm,
  } = getProps();
  return (
    <div className="post_form">
      <h2>Create post</h2>
      <span className="cloceIcon" onClick={closeForm}>
        <CancelRoundedIcon style={{ fontSize: "50px" }} />
      </span>
      <div className="user_Profile">
        <img src="../../../public/imagess/profile-1.jpg" alt="profile" />
        <div>
          <strong>User</strong>
          <i style={{ display: "flex", fontSize: "15px", textAlign: "center" }}>
            <PublicIcon /> Visibility
          </i>
        </div>
      </div>
      <form onSubmit={handlePost}>
        <input
          type="text"
          placeholder="What's in your mind"
          id="fileInput"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {uplaodImage && <img src={uplaodImage} alt="Preview" />}
        <input type="file" accept="image/*" onChange={handleUpLoadImage} />

        <button className="color-prim">Post</button>
      </form>
    </div>
  );
}

export default PostForm;
