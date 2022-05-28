import {Container, Row, Col, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export function Asection() {
    
    return (
        <Container className='mt-5 cwidth'>
            <Row className='abackground'>
                <div className='text-center my-5'>
                   <h1 className='tcolor mt-5 mb-3'>Are you a startup?</h1>
                   <p className='mb-3'>You are a startup looking for a passionate community
                        that wants you to reach<br/> the next level? Get started on YOIU!</p>
                        <a href="https://notionforms.io/forms/contact-form-template-12" className='btn-lg px-3 btncolor mb-5 text-white'>Apply Here</a>      
                </div>
              </Row>
        </Container>
    );
}