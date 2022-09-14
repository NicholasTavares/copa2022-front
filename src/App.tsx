import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Team from "./pages/Team";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="teams">
        <Route path=":teamId" element={<Team />} />
      </Route>
    </Routes>
  );
};

export default App;
