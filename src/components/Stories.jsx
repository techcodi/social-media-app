import { useState } from "react";
import "./Stories.css";

function Stories() {
  const stories = [
    {
      id: 0,
      name: "Bill Gates",
      image: "./imagess/story-1.jpg",
      profile: "./imagess/profile-20.jpg",
    },
    {
      id: 1,
      name: "Sonia",
      image: "./imagess/story-2.jpg",
      profile: "./imagess/profile-19.jpg",
    },
    {
      id: 2,
      name: "James",
      image: "./imagess/story-3.jpg",
      profile: "./imagess/profile-17.jpg",
    },
    {
      id: 3,
      name: "Mary",
      image: "./imagess/story-4.jpg",
      profile: "./imagess/profile-19.jpg",
    },
    {
      id: 4,
      name: "Jane",
      image: "./imagess/story-5.jpg",
      profile: "./imagess/profile-18.jpg",
    },
    {
      id: 5,
      name: "Sonia",
      image: "./imagess/story-6.jpg",
      profile: "./imagess/profile-17.jpg",
    },
  ];
  const [showStory, setShowStory] = useState();

  function handleShowStory(story) {
    setShowStory(story);
  }
  function handleCloseStory() {
    setShowStory(false);
  }

  return (
    <div className="stories-section">
      <div className="stories-container">
        <div className="div">
          {stories.map((story) => (
            <li key={story.id}>
              <div className="stories">
                <div className="main-story-div">
                  <img
                    src={story.image}
                    alt="stories"
                    className="main-story"
                    onClick={() => handleShowStory(story)}
                  />
                </div>
                <div className="story-profile-div">
                  <img
                    src={story.profile}
                    alt="stories"
                    className="story-profile"
                  />
                </div>
                <small>{story.name}</small>
              </div>
            </li>
          ))}
        </div>
        {showStory && (
          <div className="selected-story">
            <p onClick={handleCloseStory}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                width="30px"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </p>
            <div className="selected-div">
              <img
                src={showStory.image}
                alt={showStory.name}
                className="main-story"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Stories;
