import React  from 'react';
import PostCard from './PostCard';import Card from '@material-ui/core/Card';
import './Card.css';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';


function Post( props ) {

  function propiedades(posts){
    return(
    console.log(props.posts));
}

   return (
     <div>

       <Grid container direction="row" > 
       {/* <button onClick={propiedades}> Da clic </button> */}

         <PostCard posts={props.posts} />
       </Grid>    

     </div>
   );
  
}

export default Post