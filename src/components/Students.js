import React, {useEffect, useState} from "react";
import "./Students.css";

const Students = ({ company, email, picture, grades, skill, firstName, lastName })=>{

    console.log(grades)
    const gradesAverage= grades.map(Number).reduce((a,b) => a+b) / grades.length;
    const fullName = firstName.toUpperCase() + " " + lastName.toUpperCase();

    return(
        <div className="container">       
                <img src={picture}></img>
                <div className="contents">
                    <p>{fullName}</p>
                    <p>Company: {company}</p>
                    <p>Email: {email}</p>
                    <p>Skill: {skill}</p>
                    <p>Average: {gradesAverage}%</p>
                    <p>{grades.map((grade,index) => <li>Test {index + 1}: {grade}</li>)}</p>
                </div>
        </div>
    )
}

export default Students;