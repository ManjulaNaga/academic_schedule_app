import React,{Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
import AddTodo from './AddTodo';
class Todos extends Component{

deleteTodo(id){
  this.props.onDelete(id);
}
editTodo(id){
  this.props.onEdit(id);
}
handleAddTodo(todo){
  let todos = this.props.todos;
  todos.push(todo);
  this.setState({todos : todos});
}
  render(){
    let todoItems;
    console.log("in todos props== ");
    console.log(this.props.todos)
    if(this.props.todos){
      todoItems = this.props.todos.map(todo => {
        //console.log('Todos class props: '+this.props);
        return(
          <TodoItem onEdit = {this.editTodo.bind(this)} onDelete = {this.deleteTodo.bind(this)} key = {todo.title} todo ={todo}/>
      );
    });
    }
    return(
      <div className = 'todos'>
        <h2>Todos</h2>
        {todoItems}<br/>
        <AddTodo addTodo ={this.handleAddTodo.bind(this)}/>
        <br />
      </div>
    );}
}
Todos.propTypes = {
  todos: PropTypes.array,
  onDelete :PropTypes.func

};
export default Todos;
