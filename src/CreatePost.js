import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core'
//import '../styles/form.css';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';


function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
const submitButtonStyle = {
  fontSize: '18px', 
  backgroundColor: '#3f51b5', 
  color: 'white',
  textTransform: 'none',
  margin: '10px'
}


const addStyle = { 
  backgroundColor: 'coral', 
  color: 'white',
  borderRadius: "50%",
  padding: "10px",
  float:"right"
}
const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(4),
      outline: 'none',
    },
  }));


function CreatePost (props) {

    const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  const [state, setState] = useState ({
    title: '',
    subtitle: '',
    shortDescription: '',
    description: '', 
    imageUrl:'',
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    //props.handleText(state)
    props.history.push('/Post')
  }

  const handleChange = e => {
    setState({
      [e.target.name]: e.target.value
    })
  }

    return (
        <div>
      <Typography gutterBottom></Typography>
      <Button onClick={handleOpen}>         <EditIcon style={addStyle}/></Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>

        <form onSubmit={handleSubmit}>
          <h3 style={{fontSize: "20px" , fontFamily: "Arial" }}>Create Post</h3>
          <div className="text-field">
            <TextField
              fullWidth 
              multiline
              name="title" 
              placeholder="Title"
              value={state.title} 
              onChange={handleChange}
              required 
            />
          </div>
          <div className="text-field">
            <TextField
              fullWidth
              multiline 
              name="subtitle" 
              placeholder="Subtitle" 
              value={state.subtitle} 
              onChange={handleChange}
              required 
            />
          </div>
          <div className="text-field">
            <TextField
              fullWidth
              multiline 
              name="shortDescription" 
              placeholder="Short Description" 
              value={state.shortDescription} 
              onChange={handleChange}
              required 
            />
          </div>
          <div className="text-field">
            <TextField
              fullWidth
              multiline 
              rows="4" 
              name="description" 
              placeholder="Description" 
              value={state.description} 
              onChange={handleChange}
              required 
            />
          </div>
          <div className="text-field">
            <TextField
              fullWidth
              multiline 
              name="ImageUrl" 
              placeholder="ImageUrl" 
              value={state.imageUrl} 
              onChange={handleChange}
              required 
            />
          </div>
          <Button style={submitButtonStyle} type="submit" name="Submit">
            submit
          </Button>
        </form>
        </div>
        </Modal>
      </div>
    );
  
  
};

export default CreatePost;