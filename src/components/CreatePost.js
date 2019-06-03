import React from 'react'
import '../styles/form.css'
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class Form extends React.Component {
      
      state = {
      title: '',
      subtitle: '',
      desc: ''};

/*   handleSubmit(event) {
    alert('Title: ' + this.state.title + 'Descripción: ' + this.state.desc);
    this.props.handleText(this.state)
    event.preventDefault();
    this.props.history.push('/')
  }
  handleChange(event) {
    this.setState({[event.target.name]:event.target.value});
  } */

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleText(this.state)
    this.props.history.push('/text')
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
  const backPreviousPage=()=>{
    this.props.history.goBack()
  }

  return (
    <div>
      <h1 className='titulo'>Im a Form</h1>
      <Button variant="contained" color="primary" className='boton' onClick={backPreviousPage} >Go Back</Button>
      
      <form className= 'formulario' onSubmit={this.handleSubmit}>
        <label> Titulo: <TextField type="text" name="title" value= {this.state.title} placeholder='Titulo' onChange={this.handleChange} /></label>   <br></br>
        <label> Subtitulo: <TextField type="text" name="subtitle" value= {this.state.subtitle} placeholder='Subtitulo' onChange={this.handleChange} /></label>   <br></br>
        <label> Descripcion: <TextField type="text" name="desc" value= {this.state.desc} placeholder='Descripcion' onChange={this.handleChange}/></label>   

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

}




export default Form