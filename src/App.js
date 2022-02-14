import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/registration/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
