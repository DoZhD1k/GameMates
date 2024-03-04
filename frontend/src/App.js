import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import FAQs from "./pages/FAQs";
import AboutUs from "./pages/AboutUs";
import EyeTraining from "./pages/EyeTraining";
import GamePage from "./pages/GamePage";
import Chatpage from "./pages/Chatpage";
import AdminPanel from "./pages/AdminPages/AdminPanel";
import AdminGames from "./pages/AdminPages/AdminGames";
import AdminUsers from "./pages/AdminPages/AdminUsers";
import Profile from "./pages/Profile";
// import Testing from "./components/AddCardModal/Testing";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eye" element={<EyeTraining />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chat" element={<Chatpage />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/AdminstratorPanelControll/DashboardHomePage"
            element={<AdminPanel />}
          />
          <Route
            path="/AdminstratorPanelControll/DashboardUsers"
            element={<AdminUsers />}
          />
          <Route
            path="/AdminstratorPanelControll/DashboardGames"
            element={<AdminGames />}
          />
          {/* <Route path="/addcard" element={<Testing />} /> */}

          <Route path="/games/:gameId" element={<GamePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
