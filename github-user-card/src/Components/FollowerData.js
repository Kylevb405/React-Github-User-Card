import React from 'react'
import axios from 'axios'
import FollowerCard from './FollowerCard'


class FollowerData extends React.Component {

  constructor(props){
    super(props);
      this.state = {
        followerData: []
      }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/Kylevb405/followers')
      .then((res)=>{

        console.log(res.data);

        const profileData = res.data

        profileData.forEach(object => {
            console.log(object);

            axios.get(`${object.url}`)
                .then((res)=> {

                    this.setState({
                        followerData: [...this.state.followerData, res.data]
                    })
                })
        });
      })
    .catch(err=>{
      console.log(err);
    })
  }

    render() {
        return(
            <div>

                {this.state.followerData.map((follower)=> {

                    return (

                        <FollowerCard followerData={follower} />

                    )

                })}

            </div>
        );
    }
}

export default FollowerData;