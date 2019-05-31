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

function CardCompletePost( props ) {
  const { image, title, shortDescription, description,category}=props.postList;

  console.log(props.postList);
  return (
    <Post posts={props.postList} />
  );
}

export default CardCompletePost