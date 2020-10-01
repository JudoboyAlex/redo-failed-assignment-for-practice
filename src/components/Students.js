import React, {useEffect, useState} from "react";
import "./Students.css";

const Students = ({ company, email, picture, grades, skill, firstName, lastName })=>{

    const gradesAverage= grades.map(Number).reduce((a,b) => a+b) / grades.length;

    return(
        <div className="container">       
                <img src={picture}></img>
                <div className="contents">
                    <p>{firstName.toUpperCase()} {lastName.toUpperCase()}</p>
                    <p>Company: {company}</p>
                    <p>Email: {email}</p>
                    <p>Skill: {skill}</p>
                    <p>Average: {gradesAverage}%</p>
                    <p>{grades.map((grade,index) => <li>Test {index + 1}: {grade}</li>)}</p>
                    <form>
                    <input
                    // value={}
                    // onChange={}
                    type="text"
                    placeholder="Add Tag" />
                    </form>
                </div>
        </div>
       

        
    
    )
}

export default Students;