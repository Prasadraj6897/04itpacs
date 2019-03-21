import React from 'react';
import {Container} from 'mdbreact';

class TableOfCertificationsBlockChain extends React.Component {

	constructor(props){
		super(props)
	}

	render(){
		return (
			<Container>
  	<section>      
            <h1 className="py-5 font-weight-bold text-center">Blockchain Certifications</h1>
            
			<table className="table table-hover">

		    
		    <thead className='blue-gradient lighten-4'>
		        <tr>
		            <th className='text-white'>Code #</th>
		            <th className='text-white'>Certification</th>
		            <th className='text-white'>Framework</th>

		        </tr>
		    </thead>

		    <tbody>

		        <tr className="table-info">
		            <th scope="row">114</th>
		            <td>Certified Associate in Blockchain (CABC)® - Distributed Systems</td>
		            <td>Associate</td>
		            
		        </tr>
		        <tr className="table-info">
		            <th scope="row">115</th>
		            <td>Certified Associate in Blockchain (CABC)® - CAP Theorm</td>
		            <td>Associate</td>
		            
		        </tr>			        		        
		        <tr className="table-info">
		            <th scope="row">116</th>
		            <td>Certified Associate in Blockchain (CABC)® - Decentralization</td>
		            <td>Associate</td>
		            
		        </tr>
		        <tr className="table-info">
		            <th scope="row">117</th>
		            <td>Certified Associate in Blockchain (CABC)® - Cryptography and Technical Foundations</td>
		            <td>Associate</td>
		            
		        </tr>
		        <tr className="table-info">
		            <th scope="row">118</th>
		            <td>Certified Associate in Blockchain (CABC)® - Mining</td>
		            <td>Associate</td>
		            
		        </tr>			        		        
		        <tr className="table-info">
		            <th scope="row">119</th>
		            <td>Certified Associate in Blockchain (CABC)® - Hash Functions</td>
		            <td>Associate</td>
		            
		        </tr>
		        <tr className="table-info">
		            <th scope="row">120</th>
		            <td>Certified Associate in Blockchain (CABC)® - Smart Contracts</td>
		            <td>Associate</td>
		            
		        </tr>
		        <tr className="table-info">
		            <th scope="row">121</th>
		            <td>Certified Associate in Blockchain (CABC)® - Hyperledger</td>
		            <td>Associate</td>
		            
		        </tr>			        		        
		        <tr className="table-info">
		            <th scope="row">122</th>
		            <td>Certified Associate in Blockchain (CABC)® - Application-specific blockchains (ASBCs)</td>
		            <td>Associate</td>
		            
		        </tr>
	
	        		        
		    </tbody>


		</table>

    </section>
  </Container>

				)
	}
}

export default TableOfCertificationsBlockChain