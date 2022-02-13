import React from "react";
import { Home, User } from "./pages/index";
import { Routes, Route } from "react-router-dom";

export const App: React.FC = () => {
  const user = 'test'
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path={`/${user}`} element={<User />}/>
    </Routes>
  )
};
