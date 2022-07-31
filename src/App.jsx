import React, { useState } from 'react';
import './App.css';
import courseData from './data.json';
import CourseCard from './components/CourseCard';
import NewCourse from './components/NewCourse';

function App() {
  const [courses, setCourses] = useState(courseData);
  const [admin, setAdmin] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const handleRemote = () => {
    const filtered = courses.filter(elem => elem.type === "remote");
    setCourses(filtered);
  }

  const handleSortByPrice = () => {
    const ordered = [...courses].sort((a, b) => a.price - b.price);
    setCourses(ordered);
  }

  const handleLogout = () => {
    setAdmin(prev => !prev)
  }

  const isAdmin = () => {
    if (admin) {
      return (
        <div>
          <p>Welcome back admin!</p>
          <button onClick={handleLogout}>Log out</button>
        </div>
      )
    } else {
      return <p>You should log in</p>
    }
  }

  const handleNewCourse = (course) => {
    course._id = courses.length + 1;
    const updatedCourses = [...courses];
    updatedCourses.push(course);
    setCourses(updatedCourses);
  }


  return (
    <div className="App">
      <h1>Super cool courses</h1>
      {isAdmin()}
        <button className="card-btn" onClick={handleSortByPrice}>Sort by price</button>
        <button className="card-btn" style={{ marginLeft: 10 }} onClick={handleRemote}>See remote courses</button>
        {courses.map(elem => {
          return <CourseCard key={elem._id} info={elem} />
        })}
      {showForm && <NewCourse newCourse={handleNewCourse} />}
      <button className="card-btn outlined" onClick={() => setShowForm(prev => !prev)}>{!showForm ? "Create new course" : "Hide form"}</button>
    </div>
  );
}

export default App;
