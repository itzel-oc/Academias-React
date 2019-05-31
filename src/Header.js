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
import Form from './Form'

function Header() {
    return(
         <div>
         <h3 class="sub">[</h3><span class="subtit"> Making your Life Easier </span><h3 class="sub">]</h3>
         <h1 class="titulo">Discovering the World</h1> 
         <div className="menu">
             <button class="btn active" onclick="filterSelection('all')"> All</button>
             <button class="btn" onclick="filterSelection('Travel')"> Travel</button>
             <button class="btn" onclick="filterSelection('Lifestyle')"> Lifestyle</button>
             <button class="btn" onclick="filterSelection('Business')"> Business</button>
             <button class="btn" onclick="filterSelection('Food')"> Food</button>
             <button class="btn" onclick="filterSelection('Work')"> Work</button>
             </div> 
             <Form />
             </div>

        
    )
    }
    
 export default Header