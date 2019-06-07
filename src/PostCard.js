import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import './Card.css';
import { Link } from 'react-router-dom'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import EditIcon from '@material-ui/icons/Edit';

function PostCard( props ) {
  
  function handleOpen ( postId ) {
    props.handleOpenPost(postId);
  }

  return (
    props.posts.map( (post) => 
  <Grid item xs={12} sm={6} key={post.id}> 
    <Card> 
    <Link to ="/completePost" >    
    <CardActionArea onClick={function (){handleOpen(post.id) }}>     
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