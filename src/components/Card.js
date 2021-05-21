import React from 'react';
import { FaTrash } from "react-icons/fa";

const CardList = (props) => (
	<div>
  	{props.profiles.map((profile)=>(
     <Card key={profile.id} 
     {...profile}
     deleteProfile = {props.deleteProfile}
     />))}
	</div>
);

class Card extends React.Component {
    // remove=()=>{
      
    //     alert("deleted");
    // }
	render() {
  	const profile = this.props;
  	return (
    	<div className="github-profile" style={{color: "#003E3E", fontSize: "20px"}} >
    	  <img src={profile.avatar_url} alt="github Profile" />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
          {/* <div className="email" >{profile.email}</div> */}
          
        </div>
        <button className="deleteButton"
         onClick={()=> this.props.deleteProfile(profile.id)} 
         remove={this.props.remove}>
        <FaTrash style={{color: "darkcyan", fontSize: "20px"}}/></button>
    	</div>
    );
  }
}
export default CardList