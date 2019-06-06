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
   

const [filter, setFilter]=useState([]);

    function propiedades(posts){
        return(
        console.log(props.posts));
    }


    // const handleClick = (event) => {
    //     setFilter({
    //         postFilter: event.target.value
    //       })
    //       props.onClick(event.target.value)
    //       console.log(event.target.value);
    // } 

    const handleFilter=(event)=>{
     props.handlePropFilter(event.target.value);
    }

    return(
        
         <div style={{margin: "0 auto"}} align="center">             
         <h3 class="sub">[</h3><span class="subtit" > Making your Life Easier </span><h3 class="sub">]</h3>
         <h1 class="titulo">Discovering the World</h1> 
         <div className="menu" >
         {/* <button onClick={propiedades}> Da clic </button> */}


             <Button class="btn active" onClick={handleFilter} value='all' name='all'> All</Button>
             <Button class="btn" onClick={handleFilter} value='travel' name='travel'> Travel</Button>
             <Button class="btn" onClick={handleFilter} value='lifestyle' name='lifestyle'> Lifestyle</Button>
             <Button class="btn" onClick={handleFilter} value='business'> Business</Button>
             <Button class="btn" onClick={handleFilter} value='food'> Food</Button>
             <Button class="btn" onClick={handleFilter} value='work'> Work</Button>
             </div> 
            
             <CreatePost />
             </div>   
    )
    }
    
 export default Header