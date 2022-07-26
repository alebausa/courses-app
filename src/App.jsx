import React, { useState } from 'react';
import './App.css';
import courseData from './data.json';
import CourseCard from './components/CourseCard';

function App() {
  const [courses, setCourses] = useState(courseData);
  const [admin, setAdmin] = useState(true);
  // const arr = courseData.map(elem => {
  //   return (
  //     <CourseCard info={elem} />
  //   )
  // })

  const handleRemote = () => {
    const filtered = courses.filter(elem => elem.type === "remote");
    setCourses(filtered);
    // courses = filtered;
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


  return (
    <div className="App">
      <h1>Super cool courses</h1>
        {isAdmin()}
        <button className="card-btn" onClick={handleSortByPrice}>Sort by price</button>
        <button className="card-btn" style={{ marginLeft: 10 }} onClick={handleRemote}>See remote courses</button>
        {courses.map(elem => {
          return <CourseCard key={elem._id} info={elem} />
        })}
      {/* {arr} */}
    </div>
  );
}

export default App;
