import React from 'react';
import './Contact.css';

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            online: this.props.online
        };
    }
    render(){ 
        return <div className="Contact">
                    <img className="avatar" src={this.props.avatar}></img>
                    <div>
                        <h4 className="name">{this.props.name}</h4>
                            <div className="status"
                                onClick={() => {
                                    const newOnline = ! this.state.online;
                                    this.setState({online: newOnline});
                                }}>
                                 <p className = "status-text">{this.state.online ? "Online" : "Offline"}</p>
                                 <span className= {this.state.online ? "status-online" : "status-offline"}></span>       
                            </div> 
                    </div>    
                </div>   
    }
  }

export default Contact;

