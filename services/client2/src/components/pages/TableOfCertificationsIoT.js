import React from 'react';
import {Container} from 'mdbreact';

class TableOfCertificationsIoT extends React.Component {

	constructor(props){
		super(props)
	}

	render(){
		return (
			<Container>
  	<section>      
            <h1 className="py-5 font-weight-bold text-center">Internet of Things Certifications</h1>
            
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
		            <th scope="row">105</th>
		            <td>Certified Associate in Internet of Things (CAIoT)® - Inputs and End Points</td>
		            <td>Associate</td>
		            
		        </tr>	
		        <tr className="table-success">
		            <th scope="row">106</th>
		            <td>Certified Associate in Internet of Things (CAIoT)® - Communication and Information Theory</td>
		            <td>Associate</td>
		            
		        </tr>	
		        <tr className="table-success">
		            <th scope="row">107</th>
		            <td>Certified Associate in Internet of Things (CAIoT)® - Internet protocol and transmission control protocol</td>
		            <td>Associate</td>
		            
		        </tr>
		        <tr className="table-success">
		            <th scope="row">108</th>
		            <td>Certified Associate in Internet of Things (CAIoT)® - Long-Range Communication Systems and Protocols (WAN)</td>
		            <td>Associate</td>
		            
		        </tr>
		        <tr className="table-success">
		            <th scope="row">109</th>
		            <td>Certified Associate in Internet of Things (CAIoT)® - Routers and Gateways</td>
		            <td>Associate</td>
		            
		        </tr>
		        <tr className="table-success">
		            <th scope="row">110</th>
		            <td>Certified Associate in Internet of Things (CAIoT)® - Cloud Protocols and Architectures</td>
		            <td>Associate</td>
		            
		        </tr>	
		        <tr className="table-success">
		            <th scope="row">111</th>
		            <td>Certified Associate in Internet of Things (CAIoT)® - Fog Topologies</td>
		            <td>Associate</td>
		            
		        </tr>	
		        <tr className="table-success">
		            <th scope="row">112</th>
		            <td>Certified Associate in Internet of Things (CAIoT)® - IoT Security</td>
		            <td>Associate</td>
		            
		        </tr>
		        <tr className="table-success">
		            <th scope="row">113</th>
		            <td>Certified Associate in Internet of Things (CAIoT)® - Hardware virtualization</td>
		            <td>Associate</td>
		            
		        </tr>
	
	        		        
		    </tbody>


		</table>

    </section>
  </Container>

				)
	}
}

export default TableOfCertificationsIoT