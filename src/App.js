import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/admin/registration/Register";
import Login from "./components/admin/registration/Login";
import HomePage from "./components/client/HomePage";
import Dashboard from "./components/admin/features/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/register" element={<Register />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
