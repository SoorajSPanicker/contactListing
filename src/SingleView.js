import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from "react-router-dom";






function SingleView() {
  //state to hold output of api
  const[allContacts,setContacts]=useState([])
  // create an object for hook
  const {id}=useParams()
  // console.log(id);
  //api function to access single contact
  const allContact=async()=>{
    const {data}=await axios.get(`/db.json`)
    // console.log(data);
    setContacts(data.contacts)
  }
  // console.log(allContacts);
  const contact=allContacts.find(i=>i.mobile==id)
  console.log(contact);
  useEffect(()=>{
    allContact()
  },[])



  return (
    
    <Container className="w-75 ">
      {contact?<div>
        <Row>
          <Col className="text-center" lg={6} md={12} sm={12} >
          <img src={contact.profile} alt="" style={{height:'350px',width:'70%'}} />
          </Col>
          <Col lg={6} md={12} sm={12}>
          <ListGroup className="pt-4">
        <ListGroup.Item className="mb-5">{contact.name}</ListGroup.Item>
        <ListGroup.Item className="mb-5">{contact.email}</ListGroup.Item>
        <ListGroup.Item className="mb-5">{contact.mobile}</ListGroup.Item>
        <ListGroup.Item className="mb-5">{contact.location}</ListGroup.Item>
        {/* <ListGroup.Item className="m-3">Vestibulum at eros</ListGroup.Item> */}
      </ListGroup>
          </Col>
        </Row>
       
     
      </div>: <h1>No contact person</h1>
      }

      
    </Container>
    
  );
}

export default SingleView;
