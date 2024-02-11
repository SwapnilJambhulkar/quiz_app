import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CoursePage() {
  const { id } = useParams();
  const [courseData, setCourseData] = useState([]);

  async function getCourseData() {
    const apibaseURL =
      "https://api-learningumbrella.equitysofttechnologies.com/";
    try {
      const res = await axios.get(
        `https://api-learningumbrella.equitysofttechnologies.com/api/subject/subject_get?course_id=${id}&apikey=a1b7fbb288185217e2f3084c2e6194c26316bb56&token=47950c539bce8780ca5f9bd8532b8a31ef736973`
      );
      setCourseData(res.data.r[0]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCourseData();
  }, []);

  return (
    <>
      <div>
        <h1>{courseData.name}</h1>
        <p>{courseData.description}</p>
        <button>Enroll Now</button>
        <div>
          {courseData.subject
            ? courseData.subject.map((item) => (
                <details open="true" key={item.id}>
                  <summary>{item.subject_name}</summary>
                  <div>
                    {item.Topics.map((topic) => (
                      <details style={{ marginLeft: 15 }}>
                        <summary>{topic.topic_name}</summary>
                        <div>
                          {topic.quizes.map((quiz) => (
                            <p>{quiz.quiz_name}</p>
                          ))}
                        </div>
                      </details>
                    ))}
                  </div>
                </details>
              ))
            : null}
        </div>
      </div>
    </>
  );
}
