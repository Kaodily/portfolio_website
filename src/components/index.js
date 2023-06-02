import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./explore/Explore";
import About from "./about/About";
import Layout from "./layout/Layout";
import Project from "./project/Projects";
// import Project from './project/Project';

const index = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route element={<Layout />}>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default index;
