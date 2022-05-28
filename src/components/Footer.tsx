import {Container, Row, Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";





export function Footer() {
    
    return (
        <Container className='my-5'>
            <Row>
                <Col className='text-center icolor'>    
                <a href="user@yoiu.io"><i className="fas fa-envelope fa-2x"></i> </a>                               
                <a href="https://twitter.com/yoiu_io"><i className="fab fa-twitter fa-2x"></i></a>                   
                </Col>
            </Row>
        </Container>

    );
}