import React, { Dispatch, SetStateAction } from 'react';
import Modal from "react-bootstrap/Modal";

const buttonStyle = {
  marginLeft:'10px',
  marginTop:'10px',
  marginRight:'10px'
}

export default function GameModal(props:{modalInfo: string, modalTitle: string, modalBoolean: boolean, hideModal: Dispatch<SetStateAction<boolean>>, leave: ()=>void}) {
    return <Modal show={props.modalBoolean} onHide={()=>{props.hideModal(false)}}>
    <Modal.Header>
      <Modal.Title>{props.modalTitle}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>{props.modalInfo}</p>
    </Modal.Body>
    <Modal.Footer>
      <button style={buttonStyle} className='nes-btn is-primary' onClick={()=>{props.hideModal(false)}}>Cancel</button>
      <button style={buttonStyle} className='nes-btn is-error' onClick={props.leave}>Leave</button>
    </Modal.Footer>
    </Modal>;
}