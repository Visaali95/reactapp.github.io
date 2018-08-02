import React from 'react';
import './Person.css'


const Person = (props) =>{
	return (
		<div className="Person">
			<p
			onClick={props.click} >
			Im {props.name} and
			 Im  {props.age} years old.</p>
			<p>{props.children}</p>

		</div>

		);
};

export default Person;
