import axios from 'axios';
import React, { Component } from 'react';

class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            errorMsg: ''
        }
    }
    
    render() {
        let { post } = this.state
        this.id = this.props.match.params.idz
        return (
            <div>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
        ); 
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/'+ this.id)
        .then(response => {
            this.setState({post: response.data})
            console.log(response)
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error retreiving data'})
        })
    }

    
    
}

export default UserDetails;
