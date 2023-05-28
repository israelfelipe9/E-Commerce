import { LoginForm } from "./Containers/LoginForm";
import { RegisterForm } from "./Containers/RegisterForm";
import { Sale } from "./pages/Sale";
import NotFound from "./components/notFound";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar"
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Route>
    </Routes>
  );
}

export default App;
