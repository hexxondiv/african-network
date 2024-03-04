import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import { Home } from "./pages/Home/Home";
function App() {
  return (
    <>
      {" "}
      <ScrollToTop />
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
