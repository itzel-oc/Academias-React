import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import CardActionArea from '@material-ui/core/CardActionArea';
import './Card.css';
import Post from './Post'
import PostCard from './PostCard';

function CardCompletePost( props ) {

  function propiedades(posts){
    return(
    console.log(props.posts));
}

  return (
    <div>
    <button onClick={propiedades}> Da clic </button>
    </div>
  );
}

export default CardCompletePost