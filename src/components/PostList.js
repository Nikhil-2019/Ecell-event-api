import React, { Component } from 'react';
import axios from 'axios';

import Card from './Card';

class PostList extends Component {

constructor(props) {
    super(props)

    this.state = {
         posts: []
    }
}
componentDidMount(){
    axios.get('https://ecell.nitrr.ac.in/events/list/2019/?format=json')
    .then(response => {
        this.setState({posts: response.data.data})
    }).catch(error=> {
        console.log(error);
    });
}

    render() {
        const {posts} = this.state;
        return (
            <div>
                <h2 className="shadow"><em>Events</em></h2>
                <div className="home-container grid">
                {
                    posts.length ? posts.map(post => <div key={post.id}>
                    
                    <Card 
                        img={post.cover_pic}
                        name = {post.name}
                        link = {`/events/${post.id}`}
                    />
                    </div>): <h2 className="shadow">Loading...</h2>
                }
                </div>
            </div>
        )
    }
}

export default PostList;
