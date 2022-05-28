
import {Container, Row, Col, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function MainSection() {
    
    return (
        <Container className='cwidth'>
           <Row className='bg-image no-gutters'>    
             <Col Style="margin-top:5rem; margin-left:3rem;">
             <div className='mleft'>                        
               <h1 className="mb-3">A gateway to the<br/>future of<br/> blockchain</h1>
               <h4 className='mb-4'>Fueled by UST & NFTs.</h4>
               <Button className='mb-3 btnstyle'>Go to listing *Q3/Q4*</Button> 
               <p>The platform where early<br/> adopters can find hidden gems.</p>            
            </div>
            </Col>

          <Col>  
          <div>       
            <img src="images/blockchainmain2.png" className='mt-5 msimage text-center' alt="image" />          
          </div> 
          </Col>
          </Row>
        </Container>  
                        
    );
  }
