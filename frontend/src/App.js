import React from "react";
import ErrorBoundary from "./ErrorBoundary.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.tsx";
import Home from "./pages/Home.tsx";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import FAQs from "./pages/FAQs.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import EyeTraining from "./pages/EyeTraining.tsx";
import GamePage from "./pages/GamePage";
import Chatpage from "./pages/Chatpage";
import AdminPanel from "./pages/AdminPages/AdminPanel";
import AdminGames from "./pages/AdminPages/AdminGames";
import AdminUsers from "./pages/AdminPages/AdminUsers";
import Profile from "./pages/Profile";
import AdminAddUser from "./pages/AdminPages/AdminAddUser";
import ToDoPage from "./pages/AdminPages/ToDoPage.tsx";

function App() {
  return (
    <div>
      <ErrorBoundary>
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
            <Route
              path="/AdminstratorPanelControll/DashboardUsers/AddUser"
              element={<AdminAddUser />}
            />
            <Route
              path="/AdminstratorPanelControll/ToDoPage"
              element={<ToDoPage />}
            />

            <Route path="/games/:gameId" element={<GamePage />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
