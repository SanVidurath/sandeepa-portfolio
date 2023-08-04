import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CarouselList from './CarouselList';
import { projects } from '../portfolio';

const Popup = (props) => {

  const { isOpen, toggle, id } = props;

  return (
    <div>
      <Modal isOpen={isOpen} size='lg'>
        <ModalHeader toggle={() => toggle(false)}>{projects[id].name}</ModalHeader>
        <ModalBody>
          <CarouselList id={id} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => toggle(false)}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={() => toggle(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Popup;