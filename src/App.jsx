import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./context/AppProvider";
import Header from "./assets/pages/Header";
import AppLayout from "./AppLayout";
import Home from "./components/Home";
import "./App.css";
import Message from "./components/Message";
import Notification from "./components/Notification";

function App() {
  return (
    <ContextProvider>
      <div className="app">
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="message" element={<Message />} />
              <Route path="notification" element={<Notification />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ContextProvider>
  );
}

export default App;
