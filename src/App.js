import React from 'react';
import Contact from './components/Contact.js';


function App() {
  return (
    <div className="App">
      <Contact name= "Gerard" avatar ="https://randomuser.me/api/portraits/men/17.jpg" offline/>
      <Contact name= "Albertine" avatar = "https://randomuser.me/api/portraits/women/3.jpg" online/>
      <Contact name= "Jean-Claude" avatar = "https://randomuser.me/api/portraits/men/11.jpg" offline />
    </div>
  );
}

export default App;
