import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserDetails from './UserDetails';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            errorMsg: ''
        }
    }
    render() {
        let { posts } = this.state
        return (
            <div>
                {
                    posts.length ?
                    posts.map(post => 
                        <Link to={`/post/${post.id}`} key={post.id} 
                        render={(props) => <UserDetails {...props}/>}>
                            <h4>{post.title}</h4>
                        </Link>
                    ) : null
                }
            </div>
        );
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({posts: response.data.slice(0,4)})
            console.log(response)
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error retreiving data'})
        })
    }
    
}

export default Home;
