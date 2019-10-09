import React from 'react';
import './Contact.css';

function Contact(props){
    return( 
        <div className="Contact">
            <img class="avatar" src={props.avatar}></img>
            <div>
            <h4 className="name">{props.name}</h4>
            <div className="status">
                <p className = "status-text">{props.online ? "Online" : "Offline"}</p>
                <span className= {props.online ? "status-online" : "status-offline"}></span>       
            </div> 
        </div>    
        </div>   
    )
  }

export default Contact;

