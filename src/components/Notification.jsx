import "./Notification.css";

const notification = [
  {
    id: 0,
    name: "Samuel",
    image: "./imagess/profile-2.jpg",
    message: "mentioned you in a comment",
    time: "Just now",
  },
  {
    id: 1,
    name: "John",
    image: "./imagess/profile-3.jpg",
    message: "John poked you",
    time: "Just now",
  },
  {
    id: 2,
    name: "Stone",
    image: "./imagess/profile-4.jpg",
    message: "Stone posted just now",
    time: "Just now",
  },
  {
    id: 3,
    name: "Jessica",
    image: "./imagess/profile-5.jpg",
    message: "Today is Jessica birthday🎂",
    time: "Today",
  },
  {
    id: 4,
    name: "Marie",
    image: "./imagess/profile-6.jpg",
    message: "Marie added new story",
    time: "Just now",
  },
  {
    id: 5,
    name: "Nikky",
    image: "./imagess/profile-7.jpg",
    message: "Commented on Jessica post",
    time: "Just now",
  },
];

function Notification() {
  return (
    <aside>
      <div className="notification">
        <div className="notification-coln">
          {notification.map((notif, index) => (
            <div key={index} className="notification-card">
              <img src={notif.image} alt="profile" />
              <div className="notification-detail">
                <span>
                  <strong>{notif.name}</strong> {notif.message}
                </span>
                <i style={{ color: "#ccc" }}>{notif.time}</i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Notification;
