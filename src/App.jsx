import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
  const [courses, setCourses] = useState([]);

  async function getAllCourses() {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_GET_ALL_COURSES_ROUTE}`
      );
      setCourses(res.data.r);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>REGISTRATION</li>
            <li>LOGIN</li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="clouds">
          <div className="cloud">AN EVERYDAY LEARNING PLATFORM</div>
          <div className="cloud">COMPETITIVE EXAMINATION PLATFORM</div>
          <div className="ai-cloud">AI DRIVEN LEARNING PLATFORM</div>
          <div className="cloud">FREE QUIZ SOFTWARE</div>
          <div className="cloud">EVERY DAY PRACTICE</div>
        </section>
        <section className="vision">
          <p>OUR VISION</p>
          <p>We're making learning fun and enjoyable.</p>
        </section>
        <section className="grades">
          {/* <div className="grade-box">
            <p>GRADE ONE</p>
            <button>Enroll now</button>
          </div> */}
          {courses.map((course) => (
            <div key={course.id}>
              <div className="grade-box">
                <p>{course.name}</p>
                <Link to={`/courses/${course.id}`}>
                  <button>Enroll now</button>
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
