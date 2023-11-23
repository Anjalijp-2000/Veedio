import React,{useState} from 'react'
import { Modal,Form,Button } from 'react-bootstrap';

function Category() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <div className="d-grid">
      <button style={{marginBottom:'200%'}} onClick={handleShow} className='btn btn-info'>Add New Category</button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details!!!</p>
          <Form>
      <Form.Group className="border border-secondary rounded p-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Category ID" />
      </Form.Group>

      <Form.Group className="border border-secondary rounded p-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Category Name" />
      </Form.Group>

     
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className='btn btn-info'>Add</Button>
        </Modal.Footer>
      </Modal>
  
    
    </>
  )
}

export default Category