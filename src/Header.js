import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Post from './Post'
import Button from '@material-ui/core/Button'
import './Card.css'
import CardCompletePost from './CardCompletePost';
import Nav from './Nav';
import './Styles.css'
import NavBar from './NavBar';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import CreatePost from './CreatePost'
import PostCard from './PostCard';


function Header(props) {
    function propiedades(posts){
        return(
        console.log(props.posts));
    }

    //  PostFilter = props.posts.filter( post => {
    //     if (props.posts.category === 'travel');
    //     return <Post /> ;                                    
    //     });
        function PostFilter (posts) {
            if (props.posts.category ==='travel') {
                return (
                <PostCard /> );
                }}

    return(
         <div>
             
         <h3 class="sub" style={{align:'center'}}>[</h3><span class="subtit" style={{textAlign:'center'}}> Making your Life Easier </span><h3 class="sub">]</h3>
         <h1 class="titulo">Discovering the World</h1> 
         <div className="menu" >
         {/* <button onClick={propiedades}> Da clic </button> */}

             <Button class="btn active" onClick={propiedades}> All</Button>
             <Button class="btn" onClick={PostFilter}> Travel</Button>
             <Button class="btn" onClick="filterSelection('Lifestyle')"> Lifestyle</Button>
             <Button class="btn" onClick="filterSelection('Business')"> Business</Button>
             <Button class="btn" onClick="filterSelection('Food')"> Food</Button>
             <Button class="btn" onClick="filterSelection('Work')"> Work</Button>
             </div> 
             <CreatePost />
             </div>   
    )
    }
    
 export default Header