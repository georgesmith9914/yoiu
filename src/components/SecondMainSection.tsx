import {Container, Row, Col, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

export function SecondMainSection() {
    
    return (
        <Container>         
           <Row className='rowspacing'>                        
             <Col Style="margin-top:150px;">  
             <div>              
              <h3 className="tcolor mb-3">Early adoption made easy.</h3>                                  
              <p className="textstyle mb-5">Be involved in the metaverse, gaming and blockchain startups from the start. YOIU is the place where users can
               find innovative startups in their earliest stages. Adoption should be easy and fast therefore YOIU provides users with
                a simple UI to be involved with just a few clicks.</p>
               <button className='btn-lg px-3 btncolor text-white'>Listing Items Q3/Q4</button>
             </div> 
            </Col>
            <Col>
            <div className='mtop'>  
            <img src="/../../images/main.png" className='text-right' width='550px' height='500px'></img>
            </div> 
            </Col>
          </Row> 
          
          
           <Row className='rowspacing'>
             <Col>
             <div className='mtop'>              
               <img src="/../../images/main1.png" width='550px' height='500px'></img>
            </div>             
            </Col>
            <Col Style="margin-top:150px;"> 
            <div>                   
              <h3 className="tcolor mb-3">We Take The Ownership<br/> To Next Level.</h3>                                  
              <p className="textstyle mb-5">Use your NFTs as a gateway to the metaverse, gaming & co.
               YOIU allows users to utilize verified NFTs to get access to exclusive listings. These NFTs will be available through airdrops on Twitter and on several NFT marketplaces. In case you own a Bored Ape, Crypto Punk, Azuki or other various famous NFTs (NFT List will be released in Q3) you will be airdropped with different TIER NFTs 
               which you can use by yourself or handout to your friends and family!</p>  
                 <Button className='btn-lg px-3 btncolor text-white'>Check It Out Q3</Button>         
             </div>            
            </Col>
          </Row>
      

          <Row className='rowspacing'>
             <Col Style="margin-top:150px;">  
             <div>                   
              <h3 className="tcolor mb-3">Proof of Passion - PoP</h3>                                  
              <p className="textstyle mb-5">You are just starting out? Grind your way to the top with Proof of Passion! PoP will allow you to get into TIERs with passion. 
              This will make sure more users can get a piece of the cake and enjoy the benefits of being in our tier structure!</p>  
                 <Button className='btn-lg px-3 btncolor text-white'>NFT Tier Q3</Button>          
             </div> 
            </Col>
            <Col>
            <div className='mt-3'>
            <img src="/../../images/main2.png"  width='550px' height='500px'></img>
            </div> 
            </Col>          
          </Row>          
        </Container>         
         
        
    );
  }