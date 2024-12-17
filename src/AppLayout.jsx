import Navigation from "./assets/pages/Navigation";
import "./AppLayout.css";
import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <div className="app-Layout">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default AppLayout;
