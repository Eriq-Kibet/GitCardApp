import React from 'react';

import Form from './components/Form'
import CardList from './components/Card'
import Header from './components/Header'
import NavigationBar from './components/Navbar'
import Footer from './components/Footer'


class App extends React.Component {
  state = {
    profiles: [],
  };
  addNewProfile = (profileData) => {
  	this.setState(prevState => ({
    	profiles: [...prevState.profiles, profileData],
    }));
  };
  constructor(props){
    super(props);
    this.deleteProfile = this.deleteProfile.bind(this);
  }

  deleteProfile = (id) =>(
    this.setState({
      profiles: this.state.profiles.filter((profile) => profile.id !== id),
    
    })
  )
	render() {
  	return (
    	<div>     
        <NavigationBar />  
        <Header />
    	  <div className="header">{this.props.title}</div>

        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} 
        deleteProfile ={this.deleteProfile}
        />
        <Footer />
        
    	</div>
    );
  }	
}


export default App
