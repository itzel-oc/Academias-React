import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Post from './Post'
import Button from '@material-ui/core/Button'
import './Card.css'
import Header from './Header'
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { NavLink } from 'react-router-dom';

function App() {

  const handleClick = (e) => {

    }  

  const [ postList, setPostList ] = useState( [] ); 
  const [initialList, setInitialList] = useState( [] );
  const [ filterCat, setFilterCat ] = useState( 'all' ); 
  const [ openPost, setOpenPost ] = useState(0);

   useEffect(()=>{
     axios.get('https://private-c3edb-postsmock.apiary-mock.com/posts')
     .then(function(response) {
       setInitialList(response.data);
       return setPostList(response.data); 
 })
 .catch(function(error){ console.error(error)})
  },[]);

  useEffect(()=>{
  axios.post('/posts', {
    title: '',
    subtitle: '',
    shortDescription: '',
    description:'',
    category:'',
    imageUrl:''
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  });

  // function postFilter(posts){
  //   postList.filter((postit)=>postit.category=='travel');
  // }

  let op = postList.filter( p => p.id === openPost)[0];



   function testFilter (value){
    console.log(value)
    if(value === 'all'){
      setPostList(initialList);
    }else {
      console.log('entro')
      console.log(postList)
      setPostList(initialList.filter((postit)=>postit.category== value ));
    }
  }


  return (
    <div>
      <Header posts={postList} handlePropFilter={testFilter}/>
      <Router>
      <div>
        <Route path="/" exact render={()=><Post posts={postList} handleFilterC={setFilterCat} handleOpenPost={setOpenPost}
/>} />   
        <Route path="/completePost/" render={ () => <Grid container spacing={3}>
      <Grid item xs={12}>
        <Card>
          <CardMedia
              component="img" 
              height="300px"
              src={op.image}
          />
          <CardContent>
            <Typography  variant="h5" component="h2">
              {op.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {op.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <NavLink to="/"> 
        <Icon>home</Icon>
      </NavLink>
    </Grid> } />
      </div>
    </Router>    
    </div>
  );
}


export default App;

