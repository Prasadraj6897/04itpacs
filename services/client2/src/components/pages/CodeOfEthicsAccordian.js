import React, { Component } from 'react';
import { Button, Collapse, Fa} from 'mdbreact';

class CodeOfEthicsAccordian extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onClick1 = this.onClick1.bind(this);
    this.onClick2 = this.onClick2.bind(this);
    this.onClick3 = this.onClick3.bind(this);
    this.onClick4  = this.onClick4.bind(this);
    this.onClick5  = this.onClick5.bind(this);
    this.onClick6  = this.onClick6.bind(this);
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

  render() {
    return (
      <div>  
        <h2 className="card card-body bg-light white text-black">Code of Ethics</h2>
        
        <div>
          <div>
          <Fa icon="leaf" size='5x' className='mb-5'/>
            <br />
            <br />
            <p>As practitioners of Information Technology, we are committed to doing what is right and honorable. Do no greater overall harm to the world even if it would give you greater fortune and fame</p>
            <br />
            <br />   
            <Button color="primary"  onClick={this.onClick1} style={{width:'300px', marginBottom: '1rem' }}>Honesty</Button>       
          </div>

          <Collapse isOpen={this.state.accordion === 1}>
                It almost goes without saying that following a code of ethics means being ethical. Ethical means trying to do right versus wrong, good versus evil, justice versus injustice. When in an ethical conflict, decide to do what benefits society the most. Be transparent in what you do, being sure to allow either observation by or adequate communication with all stakeholders. Say what you will do, and then do it.
          </Collapse>
          
          <div>
            <Button color="primary" onClick={this.onClick2} style={{width:'300px', marginBottom: '1rem' }}>Abide by the law</Button>
          </div>
          <Collapse isOpen={this.state.accordion === 2}>
                Follow the laws that govern you and your activities. If an ethical issue is making you consider breaking the law, ensure that you have tried everything else reasonably possible and that your actions would likely be seen by most of society as being for the greater good. Most unlawful situations are unlawful because society has determined that everything works better in a particular way, even when you believe you have a powerful justification for breaking the law.
          </Collapse>
          <div>
            <Button color="primary"  onClick={this.onClick3} style={{width:'300px', marginBottom: '1rem' }}>Trust</Button>
          </div>
          <Collapse isOpen={this.state.accordion === 3}>
                Society breaks down without trust. Part of being trustworthy, besides also being ethical, transparent, and honest, means not disclosing sensitive information without prior permission of the owner, especially when that information has been given to you in confidence. In general, the less personal and confidential information you share in life, the more trustworthy people will see you as. 
          </Collapse>
          <div>
            <Button color="primary"  onClick={this.onClick4} style={{width:'300px', marginBottom: '1rem' }}>Do no harm</Button>
          </div>
          <Collapse isOpen={this.state.accordion === 4}>
                IT Professionals should start every engagement by trying not to cause any harm. Minimize potential disruptions. Also, make no public disclosure of software vulnerabilities without first notifying the software vendor and giving them adequate time to create a patch. Doing otherwise just harms more customers.
          </Collapse>
          <div>
            <Button color="primary"  onClick={this.onClick5} style={{width:'300px', marginBottom: '1rem' }}>Professional</Button>
          </div>
          <Collapse isOpen={this.state.accordion === 5}>
                Strive to be professional in all activities and interactions. This doesn’t mean you have to wear a suit, but it does mean that you should act in ways that ensure that people find you trustworthy, if not predictable. This all goes back to being ethical, honest, and transparent. Good communication is a big part of being professional.
          </Collapse>
          <div>
            <Button color="primary"  onClick={this.onClick6} style={{width:'300px', marginBottom: '1rem' }}>Set Examples</Button>
          </div>
          <Collapse isOpen={this.state.accordion === 6}>
                Be an example for others by leading a professional life. Use your powers for good and for the overall betterment of society. Show others how your IT skills improve the lives of everyone.
          </Collapse>
        </div>

      </div>
    );
  }
}

export default CodeOfEthicsAccordian;
