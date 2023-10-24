import React from 'react'
// import { courseData } from '../constants/data'
import NavBar from '../components/navBar'
import Courses from '../components/courses'

const Home:React.FC = () => {
  return (
    <div className='bg-light-bg'>
        <NavBar/>
        <Courses/>
    </div>
  )
}

export default Home