import logo from './logo.svg';
import './App.css';
import Index from "./views/Index.js";
import LandingPage from "./views/examples/LandingPage.js";
import RegisterPage from "./views/examples/RegisterPage.js";
import ProfilePage from "./views/examples/ProfilePage.js";


import { createPath  ,BrowserRouter, Route, Routes, Navigate } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/components" element={<Index />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="*" element={<Navigate to="/components" replace />} />
    </Routes>
  </BrowserRouter>

  );
}

export default App;
