import React from "react";
import Contact from "./Contact"


const profiles = [
    { 
      name: "Norbert",
      avatar: "https://randomuser.me/api/portraits/men/20.jpg",
      online : "status-online",
    },
    { 
        name: "Jean-Claude",
        avatar: "https://randomuser.me/api/portraits/men/25.jpg",
        
    },
    { 
        name: "Leopoldine",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        online : "status-online",
    },
    { 
        name: "Jean-Marie",
        avatar: "https://randomuser.me/api/portraits/men/58.jpg",
        
    },
    { 
        name: "Lucienne",
        avatar: "https://randomuser.me/api/portraits/women/26.jpg",
        
        
    },
       
   
  ];

  const ContactList = () => (
    <div>
      {profiles.map(item => (
  <Contact name={item.name} avatar={item.avatar} online={item.online}/>

      ))}
    </div>
  );

  export default ContactList; 
  