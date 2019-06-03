import React,{ useState, useEffect, Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CardActionArea from '@material-ui/core/CardActionArea';
import './Card.css';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Post from './Post'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditIcon from '@material-ui/icons/Edit';

function PostCard( props ) {

  //  const handlePost = (post) => {
  //    setState({
  //      ...state, post:post
  //    })   
  //  }

  //  const [post, setPost]=useState([
  //    selectedPost:
  //  ])

  //  const [chosenPost, setPost]=useState([

  // ])

/*   <div>
    {posts
      .filter(
        ({ category }) =>
          displayCategory === category || displayCategory === "all"
      )
      .map(({ category, titulo }) => (
        <Post
          key={`PostItems-${id}`}
          category={category}
          title={title}
        />
      ))}
  </div> */

  return (
    props.posts.map( (post) => 
  <Grid item xs={12} sm={6} key={post.id}> 
    <Card> 
    <Link to ="/completePost" >    
    <CardActionArea>     
        <CardMedia component="img" src={post.image} style={{maxHeight:"370px"}}/>
        <CardContent className="postCard"  style={{position: "absolute", padding: "30px", bottom: "0", color:"white"}}  >
          <Typography variant="h3">{post.title}</Typography>
          <Typography >{`${post.comments.length} comments `}</Typography>
          <Typography >{post.shortDescription}</Typography>
          <Typography style={{fontWeight:'bold'}}>{post.category}</Typography>
          <DeleteOutlinedIcon  style={{float:"right"}}/>
          <EditIcon   style={{float:"right"}}/>
        </CardContent>
      </CardActionArea>
      </Link>
    </Card>

  </Grid>));
}

export default PostCard 