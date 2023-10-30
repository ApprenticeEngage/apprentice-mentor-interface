import './App.css'
import CourseEdit from './screens/CourseEdit'
import Home from './screens/Home'
import { Route, Routes } from "react-router-dom";
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courseEdit" element={<CourseEdit />} />
    </Routes>
  );
}

export default App
