import React from 'react';
import {Container} from 'mdbreact';

class TableOfCertificationsCyber extends React.Component {

	constructor(props){
		super(props)
	}

	render(){
		return (
			<Container>
  	<section>      
            <h1 className="py-5 font-weight-bold text-center">Cyber Security Certifications</h1>
            
			<table className="table table-hover">

		    
		    <thead className='blue-gradient lighten-4'>
		        <tr>
		            <th className='text-white'>Code #</th>
		            <th className='text-white'>Certification</th>
		            <th className='text-white'>Framework</th>

		        </tr>
		    </thead>

		    <tbody>

		        <tr className="table-danger">
		            <th scope="row">131</th>
		            <td>Certified Associate in Cyber Security (CACS)® - Data Encryption</td>
		            <td>Associate</td>
		            
		        </tr>
		         <tr className="table-danger">
		            <th scope="row">132</th>
		            <td>Certified Associate in Cyber Security (CACS)® - Public Key Infrastructure</td>
		            <td>Associate</td>
		            
		        </tr>	
		                <tr className="table-danger">
		            <th scope="row">133</th>
		            <td>Certified Associate in Cyber Security (CACS)® - Physical Security Essentials</td>
		            <td>Associate</td>
		            
		        </tr>	
		                <tr className="table-danger">
		            <th scope="row">134</th>
		            <td>Certified Associate in Cyber Security (CACS)® - Disaster Recovery</td>
		            <td>Associate</td>
		            
		        </tr>	
		                <tr className="table-danger">
		            <th scope="row">135</th>
		            <td>Certified Associate in Cyber Security (CACS)® - Biometrics</td>
		            <td>Associate</td>
		            
		        </tr>	
		                <tr className="table-danger">
		            <th scope="row">136</th>
		            <td>Certified Associate in Cyber Security (CACS)® - System Security</td>
		            <td>Associate</td>
		            
		        </tr>	
		                <tr className="table-danger">
		            <th scope="row">137</th>
		            <td>Certified Associate in Cyber Security (CACS)® - Access Controls</td>
		            <td>Associate</td>
		            
		        </tr>	
		                <tr className="table-danger">
		            <th scope="row">138</th>
		            <td>Certified Associate in Cyber Security (CACS)® - Attacks and Countermeasures</td>
		            <td>Associate</td>
		            
		        </tr>	
	
	        		        
		    </tbody>


		</table>

    </section>
  </Container>

				)
	}
}

export default TableOfCertificationsCyber