import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Post, Profile, ChatBot, Login } from "./components";

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chatbot" element={<ChatBot />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
