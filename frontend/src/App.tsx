import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import NavBar from "./components/navBar";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <NavBar user={"Israel"} />
      <main className="container">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
