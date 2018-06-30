import React,{Component} from 'react';
import TextInput from '../../common/TextInput';
import PropTypes from 'prop-types';

class EditTodoForm extends React.Component {

  render() {
    console.log("in EditTodoForm");
    let todoToEdit;
  /*  todos = this.props.todos;
    console.log(this.props);
    if(this.props.todos){
      todoToEdit = this.props.todos.map(todo => {
        console.log('Todos class props: '+this.props);
        return(
          <TodoItem onEdit = {this.editTodo.bind(this)} onDelete = {this.deleteTodo.bind(this)} key = {todo.title} todo ={todo}/>
      );
    });
  }*/
  let taskId = this.refs.taskId;
  let title = this.refs.title;
  let status = this.refs.status;
  this.setState({
    taskId:taskId,
    title:title,
    status:status
  })
  console.log(this.state);
  //  const boxes = this.makeCheckBoxes();
    return (
      <div>
        <form>
          <TextInput
            name="taskId"
            ref="taskId"
            onChange={this.props.onChange}/>

          <TextInput
            name="title"
            ref="title"
            onChange={this.props.onChange}/>

          <TextInput
            name="status"
            ref="status"
            onChange={this.props.onChange}/>

          <input
            type="submit"
            disabled={this.props.saving}
            className="btn btn-primary"
            onClick={this.props.onSave}/>
        </form>
      </div>
  );
  }
}

EditTodoForm.propTypes = {
  todo: PropTypes.object.isRequired,
  title: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default EditTodoForm;
