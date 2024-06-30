import logo from "./logo.svg";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import { Home } from "./pages/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { NewsPage } from "./pages/NewsPage/NewsPage";
import { MainNews } from "./pages/NewsPage/MainNews/MainNews";
import { EventsPage } from "./pages/EventsPage/EventsPage";
import { MainEvents } from "./pages/EventsPage/MainEvents/MainEvents";
import Footer from "./components/Footer/Footer";
import Mission from "./pages/Mission/Mission";
import { Officers } from "./pages/Officers/Officers";
import Contact from "./pages/Contact/Contact";
import WhoWeAre from "./pages/WhoWeAre/WhoWeAre";
import Membership from "./pages/Membership/Membership";
import { JoinUs } from "./pages/JoinUs/JoinUs";
import { JournalOfEdu } from "./pages/Publications/JournalOfEdu";
import { Jobs } from "./pages/Jobs/Jobs";
function App() {
  return (
    <>
      {" "}
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news-page" element={<NewsPage />} />
        <Route path="main-news/:blog_id" element={<MainNews />} />{" "}
        <Route path="events-page" element={<EventsPage />} />
        <Route path="main-events/:blog_id" element={<MainEvents />} />
        <Route path="mission" element={<Mission />} />
        <Route path="officers" element={<Officers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="who-we-are" element={<WhoWeAre />} />
        <Route path="membership" element={<Membership />} />
        <Route path="join-us" element={<JoinUs />} />
        <Route path="journal" element={<JournalOfEdu />} />
        <Route path="jobs" element={<Jobs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
