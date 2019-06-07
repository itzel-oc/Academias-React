import React from 'react';
import './Card.css'
import './Styles.css'
import CreatePost from './CreatePost'


function Header(props) {

    const handleFilter=(event)=>{
     props.handlePropFilter(event.target.value);
    }

    return(
        
         <div style={{margin: "0 auto"}} align="center">             
         <h3 className="sub">[</h3><span class="subtit" > Making your Life Easier </span><h3 class="sub">]</h3>
         <h1 class="titulo">Discovering the World</h1> 
         <div className="menu" >
             <button className="btn active" onClick={handleFilter} value='all' name='all'> All</button>
             <button className="btn" onClick={handleFilter} value='travel' name='travel'> Travel</button>
             <button className="btn" onClick={handleFilter} value='lifestyle' name='lifestyle'> Lifestyle</button>
             <button className="btn" onClick={handleFilter} value='business'> Business</button>
             <button className="btn" onClick={handleFilter} value='food'> Food</button>
             <button className="btn" onClick={handleFilter} value='work'> Work</button>
             </div>             
             <CreatePost />
             </div>   
    )
    }
    
 export default Header