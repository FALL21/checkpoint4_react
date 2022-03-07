import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from "prop-types";
import {Button} from "react-bootstrap";
function ProfilComponent(props) {
  return (
    <div style={{backgroundColor:"#1B1A17",textAlign:"center"}}>
      <h1 style={{backgroundColor:"#ffff",color:"black",width:500,marginLeft:'32%'}}>{props.fullName}</h1>
      <h2 style={{backgroundColor:"#CD853F",color:"black", width:500,marginLeft:"32%"}}>{props.profession}</h2>
      <p style={{backgroundColor:"#dc143c",color:"#fff",width:500,marginLeft: '32%'}}>{props.bio}</p>
      <img src={props.myimage} alt='me' style={{width:500,border:'2px white solid',marginLeft: '3%' }}/>
      <p><Button variant="light" onClick={props.handleName} style={{border:'2px #1B1A17 solid'}}>Alert </Button></p>
    </div>
  )
}
  ProfilComponent.defaultProps={fullName:"Mame Bou FALL", bio:"Etudiant en Master Mathematiques à l'UCAD",
  profession:'Developpeur WEB'}

  ProfilComponent.propTypes={
    stringProp: PropTypes.string
    }

export default ProfilComponent;     