import React from 'react';
import './App.css';
import PostList from './components/PostList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import EventDetail from './components/EventDetail'

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
        <Route path= "/" exact component={PostList} />
        <Route path= "/events/:id" component={EventDetail}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
