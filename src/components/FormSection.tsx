import {Container, Row, Col, Button, Modal, ModalBody, ModalHeader} from 'reactstrap'; 
import {Form, FormGroup, Label, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export function FormSection() {
    
    return (
        <Container className='styling' fluid>
            <Row>                
             <Col>             
               <h1 className="textcolor mt-5">get notified.</h1>
               <p className='mt-5'>yoiu's MVP is currently being built. 
                  Join our community and be among<br /> the first users once yoiu goes live!</p>
            
             <div>               
              <Form className="form mt-5"  inline
                    onSubmit={function noRefCheck(){}}>
           <FormGroup className="mb-2 me-sm-2 mb-sm-0">
              <Label
              className="me-sm-2"
              for="exampleEmail"
              >
              Email Address
             </Label>
             <Input className='w-75'
             id="exampleEmail"
             name="email"
             type="email"
             onChange={function noRefCheck(){}}
             ></Input>
           </FormGroup>
      {''}
        <Button
          className='btn-deco mt-3'
          onClick={function noRefCheck(){}}
        >
          Submit
       </Button>
  </Form>

    <Modal toggle={function noRefCheck(){}}>
      <ModalBody>
        Email is submitted.
      </ModalBody> 
    </Modal>
  </div>         
  </Col>
 </Row>
</Container>  
        

    );
}