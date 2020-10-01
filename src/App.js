import React, {useEffect, useState} from 'react';
import Students from './components/Students';
import axios from "axios";
import './App.css';

function App() {
  const [studentData, setStudentData] = useState([]);
  const [searchByName, setSearchByName] = useState("");
  const [filteredData, setFilteredData] = useState([]);
 

  const handleChange = (e) => {
    setSearchByName(e.target.value.toLowerCase());
  } 

  // const handleChangeTag = (e) => {
  //   setSearchByTag(e.target.value.toLowerCase());
  // } 
  
  useEffect( () => {
    (async()=> {
      const studentInfo = await axios(
        `https://www.hatchways.io/api/assessment/students`
      );
      setStudentData(studentInfo.data.students);
      console.log(searchByName);
      if (searchByName.length > 0) {
        console.log("yo G")
        const searchResult = studentInfo.data.students.filter(student =>
          student.firstName.toLowerCase().includes(searchByName) ||
          student.lastName.toLowerCase().includes(searchByName)
        );
        console.log(searchResult);
        setFilteredData(searchResult)
      } else {
        setFilteredData(studentInfo.data.students)
      }
    })();
  },[searchByName])

  return (
    <div>
      <form>
          <input
          value={searchByName}
          onChange={handleChange}
          type="text"
          placeholder="Search By Name" />
      </form>
      <form>
          <input
          // value={this.state.search}
          // onChange={this.handleChange}
          type="text"
          placeholder="Search By Tag" />
      </form>
      <div>
        {filteredData.map((student) => (
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
    </div>
  );
}

export default App;

