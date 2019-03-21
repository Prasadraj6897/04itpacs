import React from 'react';
import {Container} from 'mdbreact';

class TableOfCertificationsBigData extends React.Component {

	constructor(props){
		super(props)
	}

	render(){
		return (
			<Container>
  	<section>      
            <h1 className="py-5 font-weight-bold text-center">Big Data Technologies Certifications</h1>
            
			<table className="table table-hover">

		    
		    <thead className='blue-gradient lighten-4'>
		        <tr>
		            <th className='text-white'>Code #</th>
		            <th className='text-white'>Certification</th>
		            <th className='text-white'>Framework</th>

		        </tr>
		    </thead>

		    <tbody>

		         <tr className="table-success">
		            <th scope="row">123</th>
		            <td>Certified Associate in Big Data Technologies (CABDT)® - Distributed Storage</td>
		            <td>Associate</td>
		            
		        </tr>
		        <tr className="table-success">
		            <th scope="row">124</th>
		            <td>Certified Associate in Big Data Technologies (CABDT)® - Distributed Processing</td>
		            <td>Associate</td>
		            
		        </tr>		        		        		        		        			        		        		        		            		        		        			        		        		     
			        <tr className="table-success">
		            <th scope="row">125</th>
		            <td>Certified Associate in Big Data Technologies (CABDT)® - NoSQL</td>
		            <td>Associate</td>
		            
		        </tr>
		        <tr className="table-success">
		            <th scope="row">126</th>
		            <td>Certified Associate in Big Data Technologies (CABDT)® - Message brokers</td>
		            <td>Associate</td>
		            
		        </tr>
		        <tr className="table-success">
		            <th scope="row">127</th>
		            <td>Certified Associate in Big Data Technologies (CABDT)® - Distributed File Systems</td>
		            <td>Associate</td>
		            
		        </tr>
		        <tr className="table-success">
		            <th scope="row">128</th>
		            <td>Certified Associate in Big Data Technologies (CABDT)® - Data Lake</td>
		            <td>Associate</td>
		            
		        </tr>		        		        		        		        			        		        		        		            		        		        			        		        		     
			        <tr className="table-success">
		            <th scope="row">129</th>
		            <td>Certified Associate in Big Data Technologies (CABDT)® - Lambda Architecture</td>
		            <td>Associate</td>
		            
		        </tr>
		        <tr className="table-success">
		            <th scope="row">130</th>
		            <td>Certified Associate in Big Data Technologies (CABDT)® - Privacy</td>
		            <td>Associate</td>
		            
		        </tr>
	
	        		        
		    </tbody>


		</table>

    </section>
  </Container>

				)
	}
}

export default TableOfCertificationsBigData