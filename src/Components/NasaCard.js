import React from "react";
import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Col
  } from 'reactstrap';
  
const NasaCard = props => {
    return(
      <Col>
        <Card>
        <CardTitle >{props.nasa.title} </CardTitle>
            <CardSubtitle>{props.nasa.date}</CardSubtitle>
          <CardImg 
          top width="100%" 
          alt="" 
          src={props.nasa.url}/>
          {console.log(props.nasa.url)}
          <CardBody>
            <CardText>{props.nasa.explanation}</CardText>
          </CardBody>
        </Card>
      </Col>
    )
}


export default NasaCard;