import './App.css';
import React from 'react'
import axios from 'axios'
import UserCard from './Components/UserCard'
import FollowerData from './Components/FollowerData';

class App extends React.Component {

  constructor(props){
    super(props);
      this.state = {
        userData: {}
      }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/Kylevb405')
      .then((res)=>{

        this.setState({

          userData: res.data

        })
      })
    .catch(err=>{
      console.log(err);
    })
  }

  render(){
    return (
      <div className="App">
        <UserCard userData={this.state.userData} />
        <FollowerData />
      </div>
    );
  }
}

export default App;