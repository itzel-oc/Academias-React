import React  from 'react';
import PostCard from './PostCard';
import './Card.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon';
import { NavLink } from 'react-router-dom';


function Post( props ) {

   return (
     <div>

       <Grid container direction="row" > 
         <PostCard posts={props.posts} handleOpenPost={props.handleOpenPost}/>
       </Grid>    
     </div>
   );
  
}

export default Post