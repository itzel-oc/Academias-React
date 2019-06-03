import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Post from './Post'
import Button from '@material-ui/core/Button'
import './Card.css'
import CardCompletePost from './CardCompletePost';
import Header from './Header'
import NewPost from './NewPost'
import VisiblePosts from './VisiblePosts';


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

  const PostFilter = postList.filter( post => {
    if (post.category === 'travel');
    return post.category === post.category ;                                    
    });

  return (
    <div>
      <Header posts={postList}/>
      <Router>
      <div>
        <Route path="/" exact render={()=><Post posts={postList} />} />
        <Route path="/completePost/" component={CardCompletePost} />        
      </div>
    </Router>    
    </div>
  );
}


export default App;

