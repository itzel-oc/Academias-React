import React  from 'react';
import PostCard from './PostCard';
import './Card.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'


function Post( props ) {

  function backPreviousPage(){
    props.history.goBack()
  }

   return (
     <div>

       <Grid container direction="row" > 
         <PostCard posts={props.posts} handleOpenPost={props.handleOpenPost}/>
       </Grid>    
       <Button variant="contained" color="primary" onClick={backPreviousPage} >Go Back</Button>

     </div>
   );
  
}

export default Post