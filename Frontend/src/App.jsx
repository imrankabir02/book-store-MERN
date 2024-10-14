import Courses from "./courses/Courses";
import Home from "./home/Home";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      {/* <Home />
      <Course /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses />} />
      </Routes>
    </>
  )
}