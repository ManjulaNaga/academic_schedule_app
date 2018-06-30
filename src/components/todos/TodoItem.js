import React,{Component} from 'react';
import deleteimg from '../../delete_Icon.png';
import editImg from '../../edit.png';
 import EditTodoForm from './EditTodoForm';
import PropTypes from 'prop-types';
import '../../App.css';


class TodoItem extends Component{
  deleteTodo(id){
    console.log("in delete todo");
    this.props.onDelete(id);
  }
  editTodo(id){
    console.log("in edit todoitem");
    this.props.onEdit(id);
  }
  render(){
    console.log(this.props);
    return(
      <div className = 'todoList'>
        <center>
        <table>
          <tr>
            <td className='thin'> {this.props.todo.taskId} </td>
            <td> {this.props.todo.title} </td>
            <td>{this.props.todo.status} </td>
            <td className='thin'>
              <img src ={editImg} width={15} height={15} alt='(imageNotValid)' onClick={this.editTodo.bind(this,this.props.todo.taskId)}/></td>
            <td><img src ={deleteimg} width={15} height={15} alt='(imageNotValid)' onClick={this.deleteTodo.bind(this,this.props.todo.taskId)}/> </td>
          </tr>
        </table>
      </center>
      </div>
    );
  }
}

export default TodoItem;
