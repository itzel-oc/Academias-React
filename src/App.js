import React, { useState, useEffect } from 'react';

function App() {
  const [createPost, setPost] =useState('');
  const [postList, setPostList] =useState('');
  const addPost=()=>{
    setPostList([...postList, createPost]);   
      setPost('');
  };
  

  useEffect(()=>{
    fetch('https://private-c3edb-postsmock.apiary-mock.com/posts')
.then(response => response.json())
.then(data => {
  console.log(data);   
})
.catch(error => console.error(error))
 },[]);

 
 return (
  <div className="App">
    <div>

    </div>
  </div>
);
}

export default App;