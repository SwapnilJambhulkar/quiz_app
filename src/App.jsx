import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [courses,setCourses]=useState([]);

  async function getCourses(){
    const res=await fetch("https://api-learningumbrella.equitysofttechnologies.com/api/course/course_get?apikey=a1b7fbb288185217e2f3084c2e6194c26316bb56&token=47950c539bce8780ca5f9bd8532b8a31ef736973")
    .then(res => res.json())
  }

  useEffect(() =>{
    const courseList=Promise.resolve(getCourses()).then(res => res);
    setCourses(courseList);
    console.log(courses);
  },[])
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
          <div className="grade-box">
            <p>GRADE ONE</p>
            <button>Enroll now</button>
          </div>
          {/* Repeat for other grade levels */}
        </section>
      </main>
    </div>
  );
}

export default App;
