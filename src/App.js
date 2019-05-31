import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Post from './Post'
import Button from '@material-ui/core/Button'
import './Card.css'
import CardCompletePost from './CardCompletePost';
import Nav from './Nav';
import Header from './Header'

function App() {

  const handleClick = (e) => {

    }  
  

  const [ postList, setPostList ] = useState( [] ); 

   useEffect(()=>{
     axios.get('https://private-c3edb-postsmock.apiary-mock.com/posts')
     .then(function(response) {
       return setPostList(response.data); 
 })
 .catch(function(error){ console.error(error)})
  },[]);

  return (
    <div>
      <Header/>
      <Router>
      <div>
        <Route path="/" exact render={()=><Post posts={postList}/>} />
        <Route path="/completePost/" component={CardCompletePost} />        
      </div>
    </Router>    
    </div>
  );
}


export default App;

