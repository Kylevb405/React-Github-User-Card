import React, { Component } from 'react';

class UserCard extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>User Data</h1>
                <h2>Name: {this.props.userData.name}</h2>
                <h2>Url: {this.props.userData.url}</h2>
                <h2>Login: {this.props.userData.login}</h2>
                <h2>Followers: {this.props.userData.followers}</h2>
                <h2>Repos: {this.props.userData.public_repos}</h2>
            </div>
        )
    }   
}
export default UserCard;