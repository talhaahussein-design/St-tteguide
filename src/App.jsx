import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import Home from "./pages/Home";
import Feelings from "./pages/Feelings";
import BodyMap from "./pages/BodyMap";
import Communication from "./pages/Communication";
import Stories from "./pages/Stories";
import Profile from "./pages/Profile";

import ParentDashboard from "./features/parent/ParentDashboard";

function RoleSelection() {
  const { login } = useContext(AuthContext);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Vælg profil</h1>
      <button onClick={() => login("child")}>Jeg er barn/ung</button>
      <br /><br />
      <button onClick={() => login("parent")}>Jeg er forælder</button>
      <br /><br />
      <button onClick={() => login("professional")}>
        Jeg er fagperson
      </button>
    </div>
  );
}

export default function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter basename="/St-tteguide">
      {!user ? (
        <RoleSelection />
      ) : (
        <Routes>
          {user.role === "parent" && (
            <Route path="/*" element={<ParentDashboard />} />
          )}

          {user.role !== "parent" && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/feelings" element={<Feelings />} />
              <Route path="/bodymap" element={<BodyMap />} />
              <Route path="/communication" element={<Communication />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/profile" element={<Profile />} />
            </>
          )}
        </Routes>
      )}
    </BrowserRouter>
  );
}
