import React, { Component } from 'react';

class FollowerCard extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {

        console.log(this.props);
        
        return (
            <div>
                <h1>Follower Data</h1>
                <h2>Name: {this.props.followerData.name}</h2>
                <h2>Url: {this.props.followerData.url}</h2>
                <h2>Login: {this.props.followerData.login}</h2>
                <h2>Followers: {this.props.followerData.followers}</h2>
                <h2>Repos: {this.props.followerData.public_repos}</h2>
            </div>
        )
    }   
}
export default FollowerCard;