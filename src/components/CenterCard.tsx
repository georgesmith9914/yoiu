import {Container, Row, Col, Button} from 'reactstrap';
import {Card, CardImg, CardText, CardBody} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export function CenterCard() {
    
    return (
 <Container className='my-5'>
  <Row> 
     <p className='mb-5 text-center cardp'>Our Listings</p>
  <Col>
  <a href="">
  <Card className="background">
  <CardImg variant="top" className='himg' src="images/playgame.png" />
  <CardBody>
  <CardText text-white className='rmove mb-5' ><h5>PLAY 2 EARN with Gamestar World</h5>
       <ul className='list' >
       <li>ACME-IDO LISTING</li>
       <p className='text-warning'>Mobile NFT Game</p>
       <li>UST TARGET:TBA</li>
       <li>PRICE:TBA</li>
       <li>PROJECT STARTS:TBA</li>      
     </ul>
    </CardText>     
  </CardBody>
 </Card>
 </a>
</Col>

 <Col>   
 <a href="">
 <Card className="background">
  <CardImg variant="top" className='himg' src="images/playgame1.jpg" />
  <CardBody>
  <CardText className='rmove mb-5' text-white><h5>Web 3.0 Gaming - E-Sports 2048</h5>      
     <ul className='list'>
       <li>ACME-IDO LISTING</li>
       <p className='text-warning'>Create your own Realm!</p>
       <li>UST TARGET:TBA</li>
       <li>PRICE:TBA</li>
       <li>PROJECT STARTS:TBA</li>      
     </ul>
    </CardText>     
  </CardBody>
 </Card>
 </a>
 </Col>

  <Col>
  <a href="">
 <Card className="background">
  <CardImg variant="top" className='himg' src="images/playgame2.jpg"/>
  <CardBody>
  <CardText className='rmove mb-5' text-white><h5>IMMERSIVE METAVERSE - NFT Boutique</h5>
     <ul className='list' >
       <li>ACME-IDO LISTING</li>
       <p className='text-warning'>SaaS - Full VR Experience </p>
       <li>UST TARGET:TBA</li>
       <li>PRICE:TBA</li>
       <li>PROJECT STARTS:TBA</li>      
     </ul>
    </CardText>     
  </CardBody>
  </Card>
  </a>
  <Button className='btncolor btn-lg mt-5 px-4 btnmove'>View All Q4</Button> 
 </Col>
 </Row> 
  </Container>
  
   );
}