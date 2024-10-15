import Abouts from "./about/Abouts";
import Contacts from "./contacts/Contacts";
import Courses from "./courses/Courses";
import Home from "./home/Home";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<Abouts />} />
      </Routes>
    </>
  )
}