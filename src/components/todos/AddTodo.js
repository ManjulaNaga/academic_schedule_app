import React,{Component} from 'react';
import PropTypes from 'prop-types';

class AddTodo extends Component{
  constructor(){
    super();
    this.state = {
      newTodo : {}
    }
  }
  handleSubmit(e){
    console.log("Add new todo here");
    this.setState({newTodo:{
      taskId : this.refs.taskId.value,
      title : this.refs.title.value,
      status : this.refs.status.value
    }},function(){
      this.props.addTodo(this.state.newTodo);
    });
    console.log(this.state);
    this.refs.taskId.value = '';
    this.refs.title.value = '';
    e.preventDefault();

  }
  render(){
    return(
      <div>
        <form onSubmit = {this.handleSubmit.bind(this)} >
        <input className = 'input' type ='number' ref = 'taskId'/>
        <input className = 'input' type ='text' ref = 'title'/>
        <input className = 'input' type ='text' ref = 'status'/>
        <input type = 'submit' value = 'Add Todo'/>
      </form>
      </div>
    );
  }
}
AddTodo.propTypes = {
  addTodo: PropTypes.func,
};
export default AddTodo;
