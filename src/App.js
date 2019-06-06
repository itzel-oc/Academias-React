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
import PostCard from './PostCard'

function App() {

  const handleClick = (e) => {

    }  

  const [ postList, setPostList ] = useState( [] ); 
  const [initialList, setInitialList] = useState( [] );
  const [ filterCat, setFilterCat ] = useState( 'all' ); 

   useEffect(()=>{
     axios.get('https://private-c3edb-postsmock.apiary-mock.com/posts')
     .then(function(response) {
       setInitialList(response.data);
       return setPostList(response.data); 
 })
 .catch(function(error){ console.error(error)})
  },[]);

  // function postFilter(posts){
  //   postList.filter((postit)=>postit.category=='travel');
  // }

   function testFilter (value){
    console.log(value)
    if(value === 'all'){
      setPostList(initialList);
    }else {
      console.log('entro')
      console.log(postList)
      setPostList(initialList.filter((postit)=>postit.category== value ));
    }
  }

 
  return (
    <div>
      <Header posts={postList} handlePropFilter={testFilter}/>
      <CardCompletePost posts={postList}/>
      <Router>
      <div>
      {/* <Route path="/" exact render={()=><Post posts={postList} posts={postList.filter((postit)=>postit.category=='travel')}/>} /> */}
        <Route path="/" exact render={()=><Post posts={postList} />} />
        <Route path="/completePost/" exact render={()=><PostCard posts={postList[0]} handleFilterC={setFilterCat}/>} />        
      </div>
    </Router>    
    </div>
  );
}


export default App;

