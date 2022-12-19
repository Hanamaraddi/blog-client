import "./App.css";
import Navbar from "./component/navbar/Navbar";
import Single from "./pages/single/Single";
import Home from "./pages/home/Home";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" exact element={user ? <Home /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Login />} />
          <Route path="/settings" element={user ? <Settings /> : <Login />} />
        </Route>

        <Route path="/post/:postId" element={<Single />} />
        <Route path="/login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
