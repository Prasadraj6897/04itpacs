export const registerFormRules = [
		{
			id:1,
			field: 'firstname',
			name: 'First name must be greater than 2 characters. No special characters or numbers.',
			valid: false
		},
		{
			id:2,
			field: 'lastname',
			name: 'Last name must be greater than 2 characters. No special characters or numbers.',
			valid: false
		},
		{
			id:3,
			field: 'email',
			name: 'Email must be more than 5 characters',
			valid: false
		},		
		{
			id:4,
			field: 'email',
			name: 'Email must be a valid email address',
			valid: false
		},
		{
			id:5,
			field: 'password',
			name: 'Password must be more than 7 characters',
			valid: false
		},
		{
			id:6,
			field: 'confirmPassword',
			name: 'Password must match',
			valid: false
		}
	]

export const loginFormRules = [
		{
			id: 1,
			field: 'email',
			name: 'Email is required',
			valid: false
		},
		{
			id: 2,
			field: 'password',
			name: 'Password is required',
			valid: false
		}

	]


export const resetpasswordFormRules = [
		{
			id: 1,
			field: 'email',
			name: 'Email is required',
			valid: false
		},
		{
			id:2,
			field: 'email',
			name: 'Enter valid email address',
			valid: false
		},

	]

export const updatepasswordFormRules = [
		{
			id:1,
			field: 'password',
			name: 'Password must be more than 7 characters',
			valid: false
		},
		{
			id:2,
			field: 'confirmPassword',
			name: 'Password must match',
			valid: false
		}

	]
