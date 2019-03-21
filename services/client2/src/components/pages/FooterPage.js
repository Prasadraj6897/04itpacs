
import React from 'react';
import { Col, Container, Row, Footer, NavLink} from 'mdbreact';


class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="blue-gradient" className="font-small pt-4 mt-4">
                <Container className="text-center text-md-left">
                    <Row className="text-center text-md-left mt-3 pb-3">
                        <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
                            <NavLink to='/about'>
                            <h6 className="text-uppercase mb-4 font-weight-bold">ITPacs.org</h6>
                            </NavLink>
                            <p>ITPacs is a non-profit organization focused on improving technology skills for the future. Our effort is dedicated in identifying critical areas of technology and promoting skills acquisition across these areas. Our core objective is to enable people in adopting new technology skills regardless of their background. </p>
                        </Col>
                        <hr className="w-100 clearfix d-md-none"/>
                        <Col md="2" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Certification</h6>
                            
                            <NavLink to='/certifications/1/1'>
                            <p>Data Science</p>
                            </NavLink>
                            
                            <NavLink to='/certifications/1/2'>
                            <p>Web</p>
                            </NavLink>

                            <NavLink to='/certifications/1/3'>
                            <p>Mobile</p>
                            </NavLink>

                            <NavLink to='/certifications/1/4'>
                            <p>Emerging</p>
                            </NavLink>
                        </Col>
                        <hr className="w-100 clearfix d-md-none"/>
                        <Col md="3" lg="2" xl="2" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                            
                            <NavLink to='/examfees'>
                            <p>Exam Fees</p>
                            </NavLink>
                            

                            <NavLink to='/trainingproviders'>
                            <p>Become a Training Provider</p>
                            </NavLink>
                            
                            <NavLink to='/riseoftechnology'>
                            <p>Where do I start?</p>
                            </NavLink>
                        </Col>
                        <hr className="w-100 clearfix d-md-none"/>
                        <Col md="4" lg="3" xl="3" className="mx-auto mt-3">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p><i className="fa fa-home mr-3"></i> 180 Shinnecock Dr, NJ 07726, USA</p>
                            <p><i className="fa fa-phone mr-3"></i> +1 732 414 7088</p>
                            <p><i className="fa fa-envelope mr-3"></i> General Queries: contact@itpacs.org</p>
                            <p><i className="fa fa-envelope mr-3"></i> RTP Support: rtpsupport@itpacs.org</p>
                            <p><i className="fa fa-envelope mr-3"></i> Test Takers: customercare@itpacs.org</p>
                            
                        </Col>
                    </Row>
                    <hr/>
                    <Row className="d-flex align-items-center">
                        <Col md="8" lg="8">
                            <p className="text-center text-md-left white-text">&copy; {(new Date().getFullYear())} Copyright: <a href="/"> ITPacs </a></p>
                        </Col>
                        <Col md="4" lg="4" className="ml-lg-0">
                            
                        </Col>
                    </Row>
                </Container>
            </Footer>
        );
    }
}
        
export default FooterPage;
                      