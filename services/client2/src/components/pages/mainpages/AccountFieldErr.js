import React from 'react'

const AccountFieldError = (props) => {

	return (
		<span className={props.formRulesObject.valid ? "success": "error"} style={{"position":"absolute","top":"70px"}}>{props.formRulesObject.name}</span>
	)
}

export default AccountFieldError