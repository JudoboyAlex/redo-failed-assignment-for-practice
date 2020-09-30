import React, {useEffect, useState} from 'react';
import Students from './components/Students';
import axios from "axios";
import './App.css';

function App() {
  const [studentData, setStudentData] = useState([]);

  useEffect( () => {
    (async()=> {
      const studentData = await axios(
        `https://www.hatchways.io/api/assessment/students`
      );
      console.log(studentData.data.students);
      setStudentData(studentData.data.students);
    })();
  },[])

  return (
    <div>
      <h1>Let's Do This!</h1>
      {studentData.map((student, index) => (
        <div>
          <Students
          key= {student.id}
          company={student.company}
          email={student.email}
          picture={student.pic}
          grades={student.grades}
          firstName={student.firstName}
          lastName={student.lastName}
          skill={student.skill}
          />
        </div>
      ))}
    </div>
  );
}

export default App;

