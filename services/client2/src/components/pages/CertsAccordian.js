import React, { Component } from 'react';
import {Collapse} from 'mdbreact';

import TableOfCertificationsDataScience from './TableOfCertificationsDataScience'
import TableOfCertificationsWeb from './TableOfCertificationsWeb'
import TableOfCertificationsMobile from './TableOfCertificationsMobile'
import TableOfCertificationsCyber from './TableOfCertificationsCyber'
import TableOfCertificationsAI from './TableOfCertificationsAI'
import TableOfCertificationsBlockChain from './TableOfCertificationsBlockChain'
import TableOfCertificationsIoT from './TableOfCertificationsIoT'
import TableOfCertificationsBigData from './TableOfCertificationsBigData'
import Pre_requisites_AssociateSVG from './img/Pre_requisites_AssociateSVG.svg'


class CertsAccordian extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onClick1 = this.onClick1.bind(this);
    this.onClick2 = this.onClick2.bind(this);
    this.onClick3 = this.onClick3.bind(this);
    this.onClick4  = this.onClick4.bind(this);
    this.onClick5  = this.onClick5.bind(this);
    this.onClick6  = this.onClick6.bind(this);
    this.onClick7  = this.onClick7.bind(this);
    this.onClick8  = this.onClick8.bind(this);

    this.state = {
      collapse: false,
      accordion: false
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  onClick1() {
    let state = '';

    if (this.state.accordion !== 1) {
      state = 1;
    } else {
      state = false;
    }

    this.setState({
      accordion: state});
  }

  onClick2() {
    let state = '';

    if (this.state.accordion !== 2) {
      state = 2;
    } else {
      state = false;
    }

    this.setState({
      accordion: state});
  }

  onClick3() {
    let state = '';

    if (this.state.accordion !== 3) {
      state = 3;
    } else {
      state = false;
    }

    this.setState({
      accordion: state});
  }
    
    onClick4() {
    let state = '';

    if (this.state.accordion !== 4) {
      state = 4;
    } else {
      state = false;
    }

    this.setState({
      accordion: state});
  }
    
    onClick5() {
    let state = '';

    if (this.state.accordion !== 5) {
      state = 5;
    } else {
      state = false;
    }

    this.setState({
      accordion: state});
  }
    
    onClick6() {
    let state = '';

    if (this.state.accordion !== 6) {
      state = 6;
    } else {
      state = false;
    }

    this.setState({
      accordion: state});
  }

      onClick7() {
    let state = '';

    if (this.state.accordion !== 7) {
      state = 7;
    } else {
      state = false;
    }

    this.setState({
      accordion: state});
  }

      onClick8() {
    let state = '';

    if (this.state.accordion !== 8) {
      state = 8;
    } else {
      state = false;
    }

    this.setState({
      accordion: state});
  }

  render() {
    return (
      <div>


      <section id="offer" className="section mt-5 mb-5">                
                <h2 className="text-center text-uppercase font-weight-bold pt-5 mt-4 mb-3 spacing wow fadeIn" data-wow-delay="0.2s"><strong>Technology Domains</strong></h2>             
                <p className="text-center text-uppercase grey-text font-weight-bold mb-5 pb-3 wow fadeIn" data-wow-delay="0.2s"><i className="fa fa-square red-text-2 mr-2" aria-hidden="true"></i>View available certifications under each domain</p>
                
                <div className="row">
                    <div className="col-md-12 col-xl-6">
                        <div className="">
                            <div className="row d-flex justify-content-center ">
                                <div className="col-md-12 col-xl-12">
                                    <div className="accordion accordion-5" id="accordionEx5" role="tablist" aria-multiselectable="true">                                     
                                        <div className="card mb-3">
                                            <div className="card-header mdb-color lighten-2 p-0 z-depth-1" role="tab" id="heading30">
                                                <i className="white fa fa-bar-chart fa-lg p-4 mr-4 float-left cyan-text" aria-hidden="true"></i>
                                            	<h5 onClick={this.onClick1} className="text-uppercase white-text mb-0 py-3 mt-1">Data Science
          										<i className={this.state.accordion === 1 ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i></h5>                                              
                                            </div> 
                                            <Collapse isOpen={this.state.accordion === 1}>
                                                              <div className="card-body rgba-stylish-slight black-text z-depth-1">
                														<TableOfCertificationsDataScience />
                												</div>          	
          													</Collapse> 
                                        </div>

                                        <div className="card mb-3">
                                            <div className="card-header mdb-color lighten-2 p-0 z-depth-1" role="tab" id="heading31">                                                
                                                <i className="teal fa fa-commenting-o fa-lg p-4 mr-4 float-left white-text" aria-hidden="true"></i>
                                                <h5 onClick={this.onClick2} className="text-uppercase white-text mb-0 py-3 mt-1">Web Development
          										<i className={this.state.accordion === 2 ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i></h5>                                              
                                            </div>
                                            <Collapse isOpen={this.state.accordion === 2}>
                                                              <div className="card-body rgba-stylish-slight black-text z-depth-1">
                														<TableOfCertificationsWeb />
                												</div>          	
          									</Collapse> 
                                        </div>
                                        
                                        <div className="card mb-3">
                                            <div className="card-header mdb-color lighten-2 p-0 z-depth-1" role="tab" id="heading32">
                                                <i className="white fa fa-mobile-phone fa-lg p-4 mr-4 float-left green-text" aria-hidden="true"></i>
                                                <h5 onClick={this.onClick3} className="text-uppercase white-text mb-0 py-3 mt-1">Mobile Development
          										<i className={this.state.accordion === 3 ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i></h5>                                              
                                            </div>
                                            <Collapse isOpen={this.state.accordion === 3}>
                                                              <div className="card-body rgba-stylish-slight black-text z-depth-1">
                														<TableOfCertificationsMobile />
                												</div>          	
          									</Collapse> 
                                        </div>

                                        <div className="card mb-3">
                                            <div className="card-header mdb-color lighten-2 p-0 z-depth-1" role="tab" id="heading32">
                                                <i className="red fa fa-credit-card fa-lg p-4 mr-4 float-left white-text" aria-hidden="true"></i>
                                                <h5 onClick={this.onClick4} className="text-uppercase white-text mb-0 py-3 mt-1">Cyber Security
          										<i className={this.state.accordion === 4 ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i></h5>                                              
                                            </div>
                                            <Collapse isOpen={this.state.accordion === 4}>
                                                              <div className="card-body rgba-stylish-slight black-text z-depth-1">
                														<TableOfCertificationsCyber />
                												</div>          	
          									</Collapse> 
                                        </div>

                                        <div className="card mb-3">
                                            <div className="card-header mdb-color lighten-2 p-0 z-depth-1" role="tab" id="heading32">
                                                <i className="white fa fa-cogs fa-lg p-4 mr-4 float-left blue-text" aria-hidden="true"></i>
                                                <h5 onClick={this.onClick5} className="text-uppercase white-text mb-0 py-3 mt-1">Artificial Intelligence (AI)
          										<i className={this.state.accordion === 5 ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i></h5>                                              
                                            </div>
                                            <Collapse isOpen={this.state.accordion === 5}>
                                                              <div className="card-body rgba-stylish-slight black-text z-depth-1">
                														<TableOfCertificationsAI />
                												</div>          	
          									</Collapse> 
                                        </div>

                                        <div className="card mb-3">
                                            <div className="card-header mdb-color lighten-2 p-0 z-depth-1" role="tab" id="heading32">
                                                <i className="blue fa fa-sitemap fa-lg p-4 mr-4 float-left white-text" aria-hidden="true"></i>
                                                <h5 onClick={this.onClick6} className="text-uppercase white-text mb-0 py-3 mt-1">Blockchain
          										<i className={this.state.accordion === 6 ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i></h5>                                              
                                            </div>
                                            <Collapse isOpen={this.state.accordion === 6}>
                                                              <div className="card-body rgba-stylish-slight black-text z-depth-1">
                														<TableOfCertificationsBlockChain />
                												</div>          	
          									</Collapse> 
                                        </div>

                                        <div className="card mb-3">
                                            <div className="card-header mdb-color lighten-2 p-0 z-depth-1" role="tab" id="heading32">
                                                <i className="green fa fa-gears fa-lg p-4 mr-4 float-left white-text" aria-hidden="true"></i>
                                                <h5 onClick={this.onClick7} className="text-uppercase white-text mb-0 py-3 mt-1">Internet of Things (IoT)
          										<i className={this.state.accordion === 7 ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i></h5>                                              
                                            </div>
                                            <Collapse isOpen={this.state.accordion === 7}>
                                                              <div className="card-body rgba-stylish-slight black-text z-depth-1">
                														<TableOfCertificationsIoT />
                												</div>          	
          									</Collapse> 
                                        </div>

                                       <div className="card mb-3">
                                            <div className="card-header mdb-color lighten-2 p-0 z-depth-1" role="tab" id="heading32">
                                                <i className="white fa fa-cloud fa-lg p-4 mr-4 float-left blue-text" aria-hidden="true"></i>
                                                <h5 onClick={this.onClick8} className="text-uppercase white-text mb-0 py-3 mt-1">Big Data and Cloud
          										<i className={this.state.accordion === 8 ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i></h5>                                              
                                            </div>
                                            <Collapse isOpen={this.state.accordion === 8}>
                                                              <div className="card-body rgba-stylish-slight black-text z-depth-1">
                														<TableOfCertificationsBigData />
                												</div>          	
          									</Collapse> 
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-12 col-xl-6">
                        <div className="card">
                            <div className="view overlay">
                                <img src={Pre_requisites_AssociateSVG} className="card-img-top" alt=""></img>
                                
                                    <div className="mask rgba-white-slight"></div>
                                
                            </div>
                            <div className="card-body text-center mb-3">                                
                                <h4 className="card-title mt-1 pb-1"><strong>Certifications relevant for the New World</strong></h4>
                                <p className="card-text dark-grey-text">Skills demanded by the labor market are evolving. Employers are demanding more flexible professionals able to 
                                function at a high level. Our goal is to provide opportunities to professionals to invest in relevant skills for the labor market that make them benefit from, and remain 
                                immune to, automation.
                                
                                Education is no longer a linear process with the endpoint of a single diploma or degree, but a continuous and fluid process that should help us adapt to changing technological, 
                                economic, and social conditions. </p>
                                

                            </div>
                        </div>
                    </div>
                </div>
              </section>
          
  

      </div>
    );
  }
}

export default CertsAccordian;
