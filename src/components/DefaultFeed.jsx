import "./Feed.css";

import { useState } from "react";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
const defaultPost = [
  {
    id: 0,
    name: "Bill Gates",
    image: "./imagess/feed-7.jpg",
    profile: "./imagess/profile-20.jpg",
    like: <FavoriteRoundedIcon />,
    likedEmoji: <FavoriteBorderRoundedIcon />,
  },
  {
    id: 1,
    name: "Sonia",
    image: "./imagess/feed-2.jpg",
    profile: "./imagess/profile-19.jpg",
    likedEmoji: <FavoriteBorderRoundedIcon />,
    like: <FavoriteRoundedIcon />,
  },
  {
    id: 2,
    name: "John Smith",
    image: "./imagess/feed-3.jpg",
    profile: "./imagess/profile-17.jpg",
    likedEmoji: <FavoriteBorderRoundedIcon />,
    like: <FavoriteRoundedIcon />,
  },
  {
    id: 3,
    name: "Cat Jee",
    image: "./imagess/feed-4.jpg",
    profile: "./imagess/profile-18.jpg",
    likedEmoji: <FavoriteBorderRoundedIcon />,
    like: <FavoriteRoundedIcon />,
  },
  {
    id: 4,
    name: "Stoner",
    image: "./imagess/feed-5.jpg",
    profile: "./imagess/profile-18.jpg",
    likedEmoji: <FavoriteBorderRoundedIcon />,
    like: <FavoriteRoundedIcon />,
  },
  {
    id: 5,
    name: "Joshua",
    image: "./imagess/feed-6.jpg",
    profile: "./imagess/profile-17.jpg",
    likedEmoji: <FavoriteBorderRoundedIcon />,
    like: <FavoriteRoundedIcon />,
  },
];

function DefaultFeed() {
  const [likes, setLikes] = useState();
  const currentDay = new Date().getDay();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  function handleLikes() {
    setLikes((likes) => !likes);
  }
  return (
    <div>
      <div className="posts">
        {defaultPost.map((post, index) => (
          <li key={index} className="post">
            <div className="post-head">
              <div>
                <img src={post.profile} alt="profile" />
                <p>
                  <strong>{post.name}</strong>
                  <i style={{ fontSize: "12px", color: "#bbb" }}>
                    Date: {currentDay} / {currentMonth} / {currentYear}
                  </i>
                </p>
              </div>
              <span>...</span>
            </div>

            <img src={post.image} alt="post-img" className="post-imgs" />

            <div className="post-icons">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  width="25px"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                  />
                </svg>
                {likes ? (
                  <span
                    onClick={handleLikes}
                    style={{ color: "red", fontSize: "30px" }}
                  >
                    {post.like}
                  </span>
                ) : (
                  <span onClick={handleLikes} style={{ fontSize: "30px" }}>
                    {post.likedEmoji}
                  </span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="20px"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="20px"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            </div>
            <div className="likes">
              <div className="likes-imgs">
                <img src={post.profile} alt="profile" />
                <img src={post.image} alt="profile" />
                <img src={post.profile} alt="profile" />
              </div>
              <p>
                {likes ? (
                  <p>
                    <i> liked by</i> <strong>You</strong> <i>and</i>
                    <strong> 2,323 others</strong>
                  </p>
                ) : (
                  <p>
                    Liked by <strong> 2,323 others</strong>
                  </p>
                )}
              </p>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default DefaultFeed;
