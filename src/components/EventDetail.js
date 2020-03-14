import React, { Component } from 'react';
import axios from 'axios';

import EventInfo from './EventInfo';

class EventDetail extends Component {
constructor(props) {
    super(props)

    this.state = {
         events:[],
        };
    
}

componentDidMount(){
    axios.get("https://ecell.nitrr.ac.in/events/list/2019/?format=json")
    .then(response=> {
        if((this.props.match.params.id - 12)!==10){
            this.setState({ events: response.data.data[this.props.match.params.id - 12] })
            console.log(this.state.events)
            }
            else{
                this.setState({events: response.data.data[this.props.match.params.id-13]})
            }
}).catch(error => {
console.log(error);
    });
}

render() {
   const {events} = this.state;
          return (
            <div>
            <EventInfo
            name = {events.name}
            img= {events.cover_pic}
            detail = {events.details}
            mail = {events.email}
            year = {events.year}
            registered = {events.no_of_ppl_registered}
            date = {events.date}
            time ={events.time}
            />
         </div>
        )
    }
}

export default EventDetail;
