import React from 'react'
import './FormErrors.css'


const InputFieldError = (props) => {

	
	return (

		<div className='green-text'>
		{
				props.formRulesObject.valid &&
				
				<i className="fa fa-check" aria-hidden="true"></i>
				
		}
		<ul className='validation-list'>
			<li className={props.formRulesObject.valid ? "success": "error"}>{props.formRulesObject.name}</li>
		</ul>
		</div>

		)

}

export default InputFieldError