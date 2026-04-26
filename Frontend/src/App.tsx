import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
}
