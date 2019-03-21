
import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import TableOfCertifications from './TableOfCertifications'

class TableOfCertsModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Container>
        
        <Button color="info" onClick={this.toggle}>View All Certifications</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} fullHeight position="top">
        <ModalHeader toggle={this.toggle}>All Certifications</ModalHeader>
        <ModalBody>
          <TableOfCertifications />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
          
        </ModalFooter>
      </Modal>   
      </Container>
    );
  }
}

export default TableOfCertsModalPage;
                                