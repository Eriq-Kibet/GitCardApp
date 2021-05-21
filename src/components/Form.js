import React from 'react';
import axios from 'axios';
import { FaPlusCircle } from "react-icons/fa";


class Form extends React.Component {
  state = { userName: '' };
  handleSubmit = async (event) => {
    event.preventDefault();
    await axios
    .get(`https://api.github.com/users/${this.state.userName}`)
    .then((response)=>{
      this.props.onSubmit(response.data);
    })
    .catch(function(error){
      if(error.response){https://fontawesome.com/v4.7.0/icon/refresh
        alert("User doesnt exist");
      }
    });
    
    this.setState({ userName: '' });
  };
  
  render() {
    return (

      <form className="mainForm" onSubmit={this.handleSubmit}>

        <input style={{ backgroundColor: "#ececec", fontSize: "1rm", width: "30%", }}
          onSubmit={this.handleSubmit}
          type="text"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          placeholder="GitHub username"
          required
        />

        <button className="inputSubmit" >
          <FaPlusCircle style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }} />
        </button>

      </form>
    );
  }
}
export default Form;
