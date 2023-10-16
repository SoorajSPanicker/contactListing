import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { Link } from "react-router-dom";


// import Container from 'react-bootstrap/Container';

function Home() {
  //state to hold all contact details
  const[contacts,setcontacts]=useState([])

  //api call
  const getAllContacts=async()=>{
    const result=await axios.get('/db.json')
    // console.log(result.data.contacts);
    // store the data in state
    setcontacts(result.data.contacts)
  }
  console.log(contacts);
  useEffect(()=>{
    getAllContacts()
  },[])
  return (
    <div>
      <Container>
      <Row className="mb-5">
      {
      contacts.length>0?contacts.map(i=>(
        <Col lg={4} md={6}>
          <Link to={`/single/${i.mobile}`} style={{textDecoration:'none'}}><Card style={{ width: '18rem'}} className="mb-5">
        <Card.Img variant="top" src={i.profile}/>
        <Card.Body>
          <Card.Title>{i.name}</Card.Title>
          {/* <Card.Text>
           E-mail id: johnw234@gmail.com
          </Card.Text> */}
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item> Name: {i.name}</ListGroup.Item>
          {/* <ListGroup.Item>Mobile No:{i.mobile}</ListGroup.Item> */}
          <ListGroup.Item>Location: {i.location}</ListGroup.Item>
        </ListGroup>
        {/* <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body> */}
      </Card></Link>
        </Col>
      ))
      : <h1>No contacts in Database</h1>}
      </Row>
      </Container>
      
      
      {/* <Row>
      <Container>
      <Col className="">
            <img src="https://i.postimg.cc/RV1wNdVR/pp5.jpg" alt="" />
          </Col>
          <Col>
            <ListGroup>
              <ListGroup.Item>Cras justo </ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Col>
      </Container>
          
       
      </Row>  */}
      
        
        
      
      
    </div>
  );
}

export default Home;
