import React, { Component } from 'react';
import axios from 'axios';
import RLDD from 'react-list-drag-and-drop/lib/RLDD';
import Card from './Card';

class PostList extends Component {

constructor(props) {
    super(props)

    this.state = {
         items: []
    };

    this.itemRenderer = this.itemRenderer.bind(this);
    this.handleRLDDChange = this.handleRLDDChange.bind(this);
}
componentDidMount(){
    axios.get('https://ecell.nitrr.ac.in/events/list/2019/?format=json')
    .then(response => {
        this.setState({items: response.data.data})
    }).catch(error=> {
        console.log(error);
    });


}

    render() {
        const {items} = this.state;
        return (
            <div>
                <h2 className="shadow"><em>Events</em></h2>
                <h3>The Items can be dragged over one another and the list will rearrange itself accordingly</h3>
                <div className="home-container grid">
                    <RLDD 
                    items={items}
                    itemRenderer={this.itemRenderer}
                    onChange={this.handleRLDDChange}
                    />
                </div>
            </div>
        )
    }

    itemRenderer(item, index) {
        return (
          
          <div className="items">
          <Card 
          img={item.cover_pic}
          name = {item.name}
          link = {`/events/${item.id}`}
          />
          </div>
        );
      }
    
      handleRLDDChange(reorderedItems) {
        this.setState({ items: reorderedItems });
      }

}

export default PostList;
