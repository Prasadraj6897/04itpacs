import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';


class ModalPage extends React.Component {
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
        <Button size='lg' color="default" onClick={this.toggle}>{this.props.name}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} size='lg' position={this.props.position}>
          <ModalHeader toggle={this.toggle}>{this.props.name}</ModalHeader>
          <ModalBody>
            {this.props.body}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
            
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default ModalPage;
                                