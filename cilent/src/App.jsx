import React from "react";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";

import { Home, CreatePost } from "./page";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link
          to="/"
          className="btn btn--home font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Home
        </Link>
        <Link
          to="/community"
          className="btn btn--community font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Community
        </Link>
      </header>
      <main className="animated sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/community" element={<Home />} />
          <Route path="/" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
