import React, {useEffect, useState} from "react";

const Students = ({ company, email, picture, grades, skill, firstName, lastName })=>{
    console.log(grades)
    return(
        <div>
            <ul>
                <li><img src={picture}></img></li>
                <li>{company}</li>
                <li>{email}</li>
                <li>{skill}</li>
                <li>{firstName}</li>
                <li>{lastName}</li>
                <li>{grades}</li>
            </ul>
        </div>
    )
}

export default Students;