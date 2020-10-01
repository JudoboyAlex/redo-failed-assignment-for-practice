import React, {useState} from "react";
import "./Students.css";

const Students = ({ company, email, picture, grades, skill, firstName, lastName })=>{
    const [tags, setTags] = useState([]);
    const gradesAverage= grades.map(Number).reduce((a,b) => a+b) / grades.length;
    
	const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    };
    
	const addTags = event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
			// props.selectedTags([...tags, event.target.value]);
			event.target.value = "";
		}
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        addTags(event);
    }

    const handleChangeTag = ({target}) => {
        console.log(target.value);
      }

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

                    <ul id="tags">
				{tags.map((tag, index) => (
					<li key={index} className="tag">
						<span className='tag-title'>{tag}</span>
						<span className='tag-close-icon'
							onClick={() => removeTags(index)}
						>
							x
						</span>
					</li>
				))}
			</ul>

                    <input
                    type="text"
                    onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
                    placeholder="Press enter to add tags"
                    />
                </div>
        </div>
       

        
    
    )
}

export default Students;