import React from 'react';
import Button from '@material-ui/core/Button'
import './Card.css'
import './Styles.css'
import CreatePost from './CreatePost'


function Header(props) {

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