import { useState } from "react";
import "./Message.css";
import EditNoteIcon from "@mui/icons-material/EditNote";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const tabs = [
  {
    label: "Primary",
    content: [
      {
        id: 0,
        profile: "./imagess/profile-10.jpg",
        name: "Stone",
        message: "what are you up to man!",
      },
      {
        id: 1,
        profile: "./imagess/profile-12.jpg",
        name: "Monday",
        message: "Hope you are good bro!",
      },
      {
        id: 2,
        profile: "./imagess/profile-11.jpg",
        name: "Grace",
        message: "I'm coming!",
      },
      {
        id: 3,
        profile: "./imagess/profile-8.jpg",
        name: "Joan",
        message: "How was the party!",
      },
      {
        id: 4,
        profile: "./imagess/profile-9.jpg",
        name: "Luca",
        message: "Rate it bro!",
      },
    ],
  },
  { label: "Group", content: [] },
  { label: "Request", content: [] },
];
function Message() {
  const [isActive, setIsActive] = useState(0);

  function handleTabs(index) {
    setIsActive(index);
  }

  return (
    <div>
      <div className="tabs_container">
        <div className="message-header">
          <h3>Messages</h3>
          <EditNoteIcon style={{ fontSize: "40px", cursor: "pointer" }} />
        </div>
        <div className="message-input">
          <SearchOutlinedIcon style={{ fontSize: "30px" }} />
          <input type="search" placeholder="Search messages" />
        </div>
        <div className="tabs">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.label}
              onClick={() => handleTabs(index)}
              activeTab={index === isActive}
            ></Tab>
          ))}
        </div>
        <div className="tab-content">
          {tabs[isActive]?.content?.length > 0 ? (
            tabs[isActive].content.map((item) => (
              <div key={item.id} className="tab-item">
                <img
                  src={item.profile}
                  alt={item.name}
                  className="profile-img"
                />
                <div>
                  <b style={{ color: "#jjj" }}>{item.name}</b>
                  <span style={{ color: "#aaa" }}>{item.message}</span>
                </div>
              </div>
            ))
          ) : (
            <p>No ,message available .</p>
          )}
        </div>
      </div>
    </div>
  );
}

const Tab = ({ label, onClick, activeTab }) => (
  <div className={`tab ${activeTab ? "active" : ""}`} onClick={onClick}>
    {label}
  </div>
);

export default Message;
