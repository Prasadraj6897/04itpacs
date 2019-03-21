import React from 'react';
import {Container} from 'mdbreact';

class TableOfCertificationsAI extends React.Component {

	constructor(props){
		super(props)
	}

	render(){
		return (
			<Container>
  	<section>      
            <h1 className="py-5 font-weight-bold text-center">Artificial Intelligence Certifications</h1>
            
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
		            <th scope="row">95</th>
		            <td>Certified Associate in Artificial Intelligence (CAAI)® - Ensemble Learning</td>
		            <td>Associate</td>
		            
		        </tr>
		        <tr className="table-danger">
		            <th scope="row">96</th>
		            <td>Certified Associate in Artificial Intelligence (CAAI)® - Detecting Patterns with Unsupervised Learning</td>
		            <td>Associate</td>
		            
		        </tr>
		        <tr className="table-danger">
		            <th scope="row">97</th>
		            <td>Certified Associate in Artificial Intelligence (CAAI)® - Building Recommender Systems</td>
		            <td>Associate</td>
		            
		        </tr>
		        <tr className="table-danger">
		            <th scope="row">98</th>
		            <td>Certified Associate in Artificial Intelligence (CAAI)® - Logic Programming</td>
		            <td>Associate</td>
		            
		        </tr>
		        <tr className="table-danger">
		            <th scope="row">99</th>
		            <td>Certified Associate in Artificial Intelligence (CAAI)® - Heuristic Search Techniques</td>
		            <td>Associate</td>
		            
		        </tr>
		        <tr className="table-danger">
		            <th scope="row">100</th>
		            <td>Certified Associate in Artificial Intelligence (CAAI)® - Natural Language Processing</td>
		            <td>Associate</td>
		            
		        </tr>
		        <tr className="table-danger">
		            <th scope="row">101</th>
		            <td>Certified Associate in Artificial Intelligence (CAAI)® - Building A Speech Recognizer</td>
		            <td>Associate</td>
		            
		        </tr>
		        <tr className="table-danger">
		            <th scope="row">102</th>
		            <td>Certified Associate in Artificial Intelligence (CAAI)® - Object Detection and Tracking</td>
		            <td>Associate</td>
		            
		        </tr>
		        <tr className="table-danger">
		            <th scope="row">103</th>
		            <td>Certified Associate in Artificial Intelligence (CAAI)® - Artificial Neural Networks</td>
		            <td>Associate</td>
		            
		        </tr>
		        <tr className="table-danger">
		            <th scope="row">104</th>
		            <td>Certified Associate in Artificial Intelligence (CAAI)® - Sensing devices</td>
		            <td>Associate</td>
		            
		        </tr>
	
	        		        
		    </tbody>


		</table>

    </section>
  </Container>

				)
	}
}

export default TableOfCertificationsAI