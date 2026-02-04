import { Link, Routes, Route, NavLink } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./components/auth/AuthContext";
import RoleRoute from "./components/RoleRoute";
import Admin from "./components/Admin";

import Home from "./components/Home";
import Login from "./components/Login";
import Events from "./components/Events";
import SignUp from "./components/SignUp";
import "./App.css";
import Unauthorized from "./components/Unathorized";

function App() {
  return (
    <>
      <AuthProvider>
        <nav>
          <Link to="/">Home</Link>
          <NavLink to="/events">Events</NavLink>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <RoleRoute role="admin">
                  <Admin />
                </RoleRoute>
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/unauthorized" element={<Unauthorized />}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
