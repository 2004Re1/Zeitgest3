
import { Route, Routes, BrowserRouter } from "react-router-dom";

import MainWrapper from "./layouts/MainWrapper";
import PrivateRoute from "./layouts/PrivateRoute";

import Register from "../src/views/auth/Register";
import Login from "../src/views/auth/Login";
import Logout from "../src/views/auth/Logout";
import ForgotPassword from "./views/auth/ForgotPassword";

function App() {

  return (
    <BrowserRouter>
      <MainWrapper>
        <Routes>
          <Route path="/register/" element={<Register />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/logout/" element={<Logout />} />
          <Route path="/forgot-password/" element={<ForgotPassword />} />
        </Routes>
      </MainWrapper>
    </BrowserRouter>
  );
}

export default App
