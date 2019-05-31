import React, { useState, useEffect, Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Post from './Post'
import Button from '@material-ui/core/Button'
import './Card.css'
import CardCompletePost from './CardCompletePost';
import NavBar from './NavBar';

class Nav extends Component {
  state = {
    post: {}
  }

  handlePost = (post) => {
    this.setState({
      post: post
    })   
  }

  render (){    
    return (
      <div className="App">
        <Router>
        <NavBar/>
          <div className="main-container">
          <Route path="/Post" render={(props)=> <Post handlePost={this.handlePost} {...props}/>}/>   
          </div>
        </Router>
      </div>   
       )
  };
}

export default Nav;


