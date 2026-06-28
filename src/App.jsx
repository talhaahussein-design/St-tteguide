import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Feelings from "./pages/Feelings";
import BodyMap from "./pages/BodyMap";
import Communication from "./pages/Communication";
import Stories from "./pages/Stories";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter basename="/St-tteguide">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feelings" element={<Feelings />} />
        <Route path="/bodymap" element={<BodyMap />} />
        <Route path="/communication" element={<Communication />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
