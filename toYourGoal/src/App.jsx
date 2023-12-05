import "./App.css";
import Navbar from "./componets/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./componets/pages/Home";
import Courses from "./componets/pages/Courses";
import Contact from "./componets/pages/Contact";
import SingIn from "./componets/SignUp";
import Login from "./componets/Login";
import About from "./componets/pages/About";
import Footer from "./componets/Footer";
import Test from "./componets/Test";
import TestResult from "./componets/TestResult";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singUp" element={<SingIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
        <Route path="/testresult" element={<TestResult />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
