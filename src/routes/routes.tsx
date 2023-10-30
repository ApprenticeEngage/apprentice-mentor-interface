import React from 'react'
import { Route, Routes } from "react-router-dom";
import Audience from '../components/CourseEdit/Audience';
import Curriculum from '../components/CourseEdit/Curriculum';
import Map from '../components/CourseEdit/Map';
import Schedule from '../components/CourseEdit/Schedule';
import Home from '../screens/Home';
import CourseEdit from '../screens/CourseEdit';


const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courseEdit" element={<CourseEdit />} />
    </Routes>
  );
}

export default routes