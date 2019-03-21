import React from 'react';
import { Col, Container, Mask} from 'mdbreact';
import Singularity from '../img/singularity.svg'
import RiseOfTechnologyPic from '../img/RiseOfTechnologyPic.svg'
import LOGO_WHITE from '../img/LOGO_WHITE.svg'
import VisionPic from '../img/VisionPic.svg'
import Data_Science_Journey from '../img/Data_Science_Journey.svg'
import Mobile_Development_Journey from '../img/Mobile_Development_Journey.svg'
import Web_Development_Journey from '../img/Web_Development_Journey.svg'
import CertsAccordian from '../CertsAccordian'


class RiseOfTechnology2 extends React.Component{

	constructor(props){
		super(props)
	}

	render(){
		const view = {background: "url(" + RiseOfTechnologyPic + ")no-repeat center center", backgroundSize: 'cover', height: '60vh', backgroundColor:'black'}
		return (
				<div>
					<header>
						<section className="view hm-gradient" style={view}>
					            <Mask overlay="black-strong" style={{flexDirection: 'column'}} className="flex-center  text-white text-center">
					            <div className="full-bg-img">
					                <div className="container flex-center">
					                    <div className="d-flex align-items-center content-height">
					                        <div className="row flex pt-5 mt-3">
					                            <div className="col-md-6 text-center text-md-left mb-5">
					                                <div className="white-text">
					                                    <h1 className="h1-responsive font-bold wow fadeInLeft" data-wow-delay="0.3s">Rise of Technology</h1>
					                                    <hr className="hr-light wow fadeInLeft" data-wow-delay="0.3s"></hr>
					                                    <h6 className="wow fadeInLeft" data-wow-delay="0.3s">Yes, your computer will be smarter than you....Technologies across multiple domains are experiencing exponential change. There is no other time in history more pressing for individuals to upgrade their skills than now. </h6>
					                                    <Col sm='6'>
										                 <img src={LOGO_WHITE} className='img-fluid' alt="itpacs"></img>
										                </Col>
					                                </div>
					                            </div>					                            
					                        </div>
					                    </div>
					                </div>
					            </div>
					       		</Mask>
					        </section>

					</header>

					<main>

					<Container>

	           			 <section id="about" className="section about mt-5 mb-5 py-3 wow fadeIn" data-wow-delay="0.2s">
			                <div className="row pt-2 mt-5">
			                    <div className="col-lg-5 col-md-12 mb-3 wow fadeIn" data-wow-delay="0.4s">
			                        
			                        <img src={Singularity} className="img-fluid z-depth-1 rounded"	alt="itpacs"></img>
			                    </div>
			                    <div className="col-lg-6 ml-auto col-md-12 wow fadeIn" data-wow-delay="0.4s">

			                        <h3 className="mb-5 dark-grey-text title font-weight-bold wow fadeIn" data-wow-delay="0.2s">
			                            <strong>Technology Singularity</strong>
			                        </h3>

			                        <p align="justify" className="grey-text">The Singularity, as it is known (or the technology Singularity, to be more precise), is a point in time in a coming decade when human life changes so drastically that it will be unimaginable to those who came before. In the coming revolution, machine intelligence (or artificial intelligence) will supersede human intelligence.</p>
			                        <p align="justify" className="grey-text">Cloud, computing, networks, AI, robots, health care, manufacturing…we are passing through an amazing time and the pace of change just continues to accelerate. These changes are hard to comprehend, and it has been postulated that by around 2040 the technology change across so many domains will be racing ahead so fast that one cannot predict what is going to happen. In physics speak, it is beyond the event horizon, that place where, as you enter the pull of a black hole, nothing can be seen.</p>
			                        <p align="justify" className="grey-text mb-5">These factors are drivers for much of what is happening in the technology revolution.</p>

			                    </div>
			                </div>
	            		</section>            
					</Container>


				<Container>
				<section className="section pt-5 mt-4 pb-3">
		            <div className="row">
		                <div className="col-md-12">

		                    <div className="card card-cascade wider reverse">
		                        <div className="view overlay">
		                            <img src={VisionPic} className="card-img-top" alt="itpacs"></img>

		                        </div>

		                        <div className="card-body text-center">
		                            <h2>
		                                New Industries, New Opportunities
		                            </h2>
		                            <p>Join the Technology movement</p>

		                        </div>
		                    </div>

		                    <div className="excerpt mt-5 ">
		                        <p>New industries are popping up between the interstitial spaces of giants, creating new opportunities
		                         and industries that we had not even imagined previously. And the pace at which this is happening is
		                          accelerating. (In fact, the pace of technology is exceeding our ability to have rational laws for
		                           dealing with it. One of the reasons tech unicorns [firms with values in excess of $1 billion] skirt
		                           and sometimes break laws is that the laws were not imagined for the reality we are in. Uber, Lyft,and 
		                           Airbnb have all had to get new legislation passed to deal with their services.
		                        </p>

		                        <p>This is the exponential backdrop to the technology movement, which is turning the movement into a 
		                        revolution. It is not just that the tools of the industrial revolution are cheaper, better, and easier
		                         to use, it is also the context into which this new reality is emerging. That context includes technologies
		                          across multiple domains that are experiencing exponential change. The combination has a multiplying effect,
		                          itself creating an exponential trend.</p>

		                        <p>Artificial intelligence is, loosely speaking, the science and engineering of making intelligent machines, 
		                        especially computer programs that learn or simulate intelligence to react like humans. The biggest 
		                        short-to-medium-term impact of robots continues to be in industrial situations. The biggest threats 
		                        that most robots create are regarding mundane and difficult jobs that are drudgery. Jobs that we will 
		                        look back on and say they were ill suited for humans.</p>

		                        <Container>
		                        <div className="card card-cascade wider reverse mb-4 mt-5">
		                        	<div className="card-body text-center">
		                            	<h2>
		                                	Access to Knowledge
		                            	</h2>
		                            
		                        	</div>
		                    	</div>
		                    	</Container>

		                    	 <p>Another key trend that is fueling the technology movement is widespread access to 
		                    	 knowledge: online learning, nontraditional educational outlets and online seminars, 
		                    	 communities of practice, video archives, tutoring, certificates, and badging. It is pretty wild—almost 
		                    	 everything you need to know about anything can be found on the Internet. Access to knowledge 
		                    	 is still far from friction free, but the barriers that have dropped are amazing. And in 
		                    	 the invention space, not only has the knowledge become more readily available, but it is easier 
		                    	 to acquire the knowledge needed because software is masking the hard stuff.</p>

		                    	 <Container>
		                    	 <div className="card card-cascade wider reverse mt-5 mb-4">
		                        	<div className="card-body text-center">
		                            	<h2>
		                                	Our goal
		                            	</h2>
		                            	<p>
		                            		Our goal at ITPACS is to streamline the knowledge acquisition process so an 
		                                	individual is on the right track of growth.
		                            	</p>
		                            
		                        	</div>
		                    	</div>
		                    	</Container>

		                    </div>
		                </div>
		            </div>
		            <hr className="mb-5 mt-4"></hr>

        </section>
        </Container>

        <div className="container-fluid" style={{backgroundColor: '#f4f4fa'}}>
            <div className="container py-4">

                <section id="services" className="section mt-3 mb-3 pb-3">
                    <h3 className="text-center title my-5 pt-4 pb-5 dark-grey-text font-weight-bold wow fadeIn" data-wow-delay="0.2s">
                        <strong>Common Myths</strong>
                    </h3>


                    <div className="row wow fadeIn" data-wow-delay="0.4s">
                        <div className="col-md-6 mb-4 text-center">

                            <div className="card card-body text-left white hoverable">
                                <p className="font-weight-bold title font-weight-bold dark-grey-text text-uppercase spacing mt-4 mx-4">
                                    <i className="fa fa-square orange-text mr-2" aria-hidden="true"></i>
                                    <strong>I am not suited for IT</strong></p>
                                    <p className="font-small font-weight-bold orange-text mx-4 mb-0">
                                        Myth #1
                                    </p>
                                
                                <p className="grey-text font-small mx-4">IT work involves a lot of puzzles and experimentation. This makes it great 
                                for folks who like making connections and solving problems. If you like problem solving, creativity, innovation 
                                	and thinking independently, you will flourish in IT. As an occupational field, information technology is 
                                	projected to be one of the fastest growing. The breadth of careers or fields within IT wide and ever expanding. 
                                    
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4 text-center">
                            <div className="card card-body text-left white hoverable">
                                <p className="font-weight-bold title font-weight-bold dark-grey-text text-uppercase spacing mt-4 mx-4">
                                    <i className="fa fa-square orange-text mr-2" aria-hidden="true"></i>
                                    <strong>I am too old to start fresh </strong></p>
                                    <p className="font-small font-weight-bold orange-text mx-4 mb-0">
                                        Myth #2
                                    </p>
                                
                                <p className="grey-text font-small mx-4">Technology is changing at a rapid pace and this is good news for people 
                                starting fresh. If an engineer had to write 100 lines of code 10 years ago, the same is achieved through 5 lines 
                                of code today. This means you will be leap-frogging many of the complexities of the past. With an ienvitable 
                                displacement of jobs due to automation on the horizon, technology is no more a “good to have” skills rather it 
                                is becoming a “must have” skill. 
                                    
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4 text-center">
                            <div className="card card-body text-left white hoverable">
                                <p className="font-weight-bold title font-weight-bold dark-grey-text text-uppercase spacing mt-4 mx-4">
                                    <i className="fa fa-square orange-text mr-2" aria-hidden="true"></i>
                                    <strong>Coding is difficult</strong></p>
                                    <p className="font-small font-weight-bold orange-text mx-4 mb-0">
                                        Myth #3
                                    </p>
                                
                                <p className="grey-text font-small mx-4">Its not. It probably used to be complex but not anymore. Many of the 
                                advancements in technology is about making it simpler and this includes programming and coding as well. High 
                                level programming languages are all about trying to make it as close as possible to the english language. 
                                Future programming languages are likelky to become close to conversations you have on a day to day basis. 
                                    
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4 text-center">
                            <div className="card card-body text-left white hoverable">
                                <p className="font-weight-bold title font-weight-bold dark-grey-text text-uppercase spacing mt-4 mx-4">
                                    <i className="fa fa-square orange-text mr-2" aria-hidden="true"></i>
                                    <strong>My work does not require any IT</strong></p>
                                    <p className="font-small font-weight-bold orange-text mx-4 mb-0">
                                        Myth #4
                                    </p>
                                
                                <p className="grey-text font-small mx-4">If you think about the most successful global businesses over the past 10 
                                years, all of them have information technology at their core. IT is pervasive. Traditional companies are 
                                transofrming into IT buisnesses offering services. A well known bank is branding itself as a technology company 
                                offering financial services. Similarly, we now have a technology company offering transportation services. 
                                A technology company offering hospitality services. The list goes on. 
                                    
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4 text-center">
                            <div className="card card-body text-left white hoverable">
                                <p className="font-weight-bold title font-weight-bold dark-grey-text text-uppercase spacing mt-4 mx-4">
                                    <i className="fa fa-square orange-text mr-2" aria-hidden="true"></i>
                                    <strong>I don’t have a computer science background</strong></p>
                                    <p className="font-small font-weight-bold orange-text mx-4 mb-0">
                                        Myth #5
                                    </p>
                                
                                <p className="grey-text font-small mx-4">People in technoloy love the phrase “abstracting away the complexity”.
                                 What this means is to focus on the main features and hide away the low level details. This is akin to a person
                                  learning to drive a car. You wouldn’t start with learning about the combustion system and the hydraulics would
                                   you? Technology is moving on a similar line. While it helps, you don’t need a computer science degree to learn
                                    and excel. You just start getting your hands wet with programming and solve problems. Leave the theoretical
                                     apsects to the professors. There’s plenty of things you can do with a car without knowing intricate details
                                      about the fuel system of a diesel engine.  
                                    
                                </p>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4 text-center">
                            <div className="card card-body text-left white hoverable">
                                <p className="font-weight-bold title font-weight-bold dark-grey-text text-uppercase spacing mt-4 mx-4">
                                    <i className="fa fa-square orange-text mr-2" aria-hidden="true"></i>
                                    <strong>It takes a long time to get good at it</strong></p>
                                    <p className="font-small font-weight-bold orange-text mx-4 mb-0">
                                        Myth #6
                                    </p>
                                
                                <p className="grey-text font-small mx-4">Getting good at something is closely related to your motivation levels. 
                                In IT, becoming an expert is a matter of months or a few years  at the most. New ways of doing stuff are constantly 
                                being pushed and you have to adapt. An expert in one area today has to very quickly start off fresh in another area 
                                tomorrow. Essentialy, everyone is a beginner in some area of technology. Your focus shouuld not be on becoming an 
                                expert, rather it should be on creating stuff, solving problems. 
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

        			<Container>
        				<section className="py-4">
          				  <h2 className="h1 text-center mb-5">Where do I Start?</h2>
			            <p className="text-center mb-5 pb-5"><strong>Programming.</strong> The heart of every single project is code. So you need to start learning 
			            a programmig language. As to which language you learn depends on your interest in a particular field. Do your 
			            research on which language is best suited for the field of work you want to explore. If you are new to programming, 
			            ideally, you should pick a general purpose language which means a programming language that allows you to work on multiple diciplines. </p>

			            <p>Here is a tentaive road map for some of the fields. This road map is based on the following assumptions about an individual:</p>
			             <ul>
			             	<li>You are new to programming and IT</li>
			             	<li>You are a working professional or have other commitments</li>
			             	<li>You are able to consistently dedicate at least 5-10 hours a week in learning </li>
			             </ul>

			                </section>

			            	<div className="card card-cascade wider reverse mb-5">
		                        <div className="view overlay">
		                            <img src={Data_Science_Journey} className="card-img-top" alt="itpacs"></img>
		                        </div>
		                        <div className="card-body cyan text-white text-center">
		                            <h2>
		                                Data Science
		                            </h2>
		                            <p>Analytics, Machine Learning etc.,</p>
		                        </div>
		                    </div>

		                    <div className="card card-cascade wider reverse mb-5">
		                        <div className="view overlay">
		                            <img src={Web_Development_Journey} className="card-img-top" alt="itpacs"></img>
		                        </div>
		                        <div className="card-body blue text-white text-center">
		                            <h2>
		                                Web Development
		                            </h2>
		                            <p>Building web apps</p>
		                        </div>
		                    </div>

		                    <div className="card card-cascade wider reverse mb-5">
		                        <div className="view overlay">
		                            <img src={Mobile_Development_Journey} className="card-img-top" alt="itpacs"></img>
		                        </div>
		                        <div className="card-body teal text-white text-center">
		                            <h2>
		                                Mobile Development
		                            </h2>
		                            <p>Building Mobile Applications</p>
		                        </div>
		                    </div>



        			</Container>

        			<Container>
        				<CertsAccordian />
        			</Container>


					<hr></hr>

					</main>
				</div>

				)
	}
}

export default RiseOfTechnology2