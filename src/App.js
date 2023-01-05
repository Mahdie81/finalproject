import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/courses";
import Blogs from "./pages/blogs";
import TIkT from "./pages/Tiket";
import Nopage from "./pages/nopage";
import Nav from "./layout/nav";
import Footer from "./layout/footer";

function App() {
  return (
      <BrowserRouter >
          <Nav/>
        <Routes >
          <Route path="/" element={<Home />}>
            <Route path="Courses" element={<Courses/>} />
            <Route path="Blogs" element={<Blogs/>} />
            <Route path="TIkT" element={<TIkT/>} />
            <Route path="*" element={<Nopage/>} />
          </Route>
        </Routes>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
