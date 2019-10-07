import React from 'react';
import './Contact.css';

function Contact(props){
    return( 
        <div className="Contact">
            <h1 class="name">{props.name}</h1>
            <img class="avatar" src={props.avatar}></img>
            <p class="status">{props.online}</p>    
        </div>   
    )
  }

export default Contact;