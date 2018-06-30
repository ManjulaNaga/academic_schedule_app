import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import Courses from './components/courses/Courses';

import Todos from './components/todos/Todos';
//import AddTodo from './components/todos/AddTodo';
import Footer from './components/footer/Footer.js';
import axios from 'axios';
import uuid from 'uuid';
import projectImg from './project.png';
import courseImg from './courses.jpg';
import todoImg from './todo.png';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos:[],
      projects :[],
      courses :[]
    }
  }

  getTodoList(){
    axios.get('http://localhost:3000/tasks',
    {
     header : {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods' : 'PUT,GET,POST,DELETE,OPTIONS'
      }
    })
    .then(response => {
      const resdata = response.data;
      console.log(resdata);
      this.setState({todos:resdata});

    })
  }
  getProjectList(){
  this.setState({
    projects :[
     {
        id: uuid.v4(),
        title:'My Hikes App',
        category:'Mobile Development'
      },
      {
        id: uuid.v4(),
        title:'TodoList API',
        category:'Restful API'
      },
      {
        id: uuid.v4(),
        title:'My Hikes API',
        category:'Restful API '
      },
      {
        id: uuid.v4(),
        title:'Multi Producer Consumer',
        category:'Operating  Systems'
      }
    ]
});
}
  getCourseList(){
    this.setState({
      courses:[
        {
          id:uuid.v4(),
          courseId:'1',
          courseName:'Operating Systems'
        },
        {
          id:uuid.v4(),
          courseId:'2',
          courseName:'Distributed Systems'
        },
        {
          id:uuid.v4(),
          courseId:'3',
          courseName:'Artificial Intelliegence'
        },
        {
          id:uuid.v4(),
          courseId:'4',
          courseName:'WebSite Developement'
        },
        {
          id:uuid.v4(),
          courseId:'5',
          courseName:'Network Systems'
        },
        {
          id:uuid.v4(),
          courseId:'6',
          courseName:'Data Structures'
        }
      ]
    });
    console.log(this.state);
  }
  componentDidMount(){
    this.getTodoList();
    this.getCourseList();
    this.getProjectList();
  }
  handleDeleteProject(id){
    alert("Are you sure to delete this project?");
    let projects = this.state.projects;
    let index = projects.findIndex(x =>x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects});
  }
  handleDeleteCourse(id){
    alert("Are you sure to delete this course?");
    let courses = this.state.courses;
    let del_index = courses.findIndex(y =>y.id === id);
    console.log(del_index);
    courses.splice(del_index,1);
    this.setState({courses:courses});
  }
  handleDeleteTodo(id){
    alert("Are you sure to delete this todo?"+id);
    let todos = this.state.todos;
    //console.log(todos);
    let del_index = todos.findIndex(y =>y.taskId === id);
    console.log(del_index);
    todos.splice(del_index,1);
    this.setState({todos:todos});
  }
  handleEditProject(id){
  console.log("in handle edit project");
  }
  handleEditCourse(id){
  console.log("in handle edit course");
  }
  handleEditTodo(id){
    console.log("in app.js handle editTodo");
    let todos = this.state.todos;
    //console.log(todos);
    let edit_index = todos.findIndex(y =>y.taskId === id);
    console.log(edit_index);
    let title = this.state.title;
    let status = this.state.status;
    axios.request({
        method:'put',
        url: 'http://localhost:3000/tasks/'+id,
        header : {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods' : 'PUT,GET,POST,DELETE,OPTIONS'
        },
        data: {
          title : title,
          status : status
        }
    })
    .then(response => {
      const resdata = response.data;
      console.log(resdata);
      this.setState({todos:resdata});
    })

  }

  render() {
    console.log("this.state"+this.state);
    return (
      <div className="App">

        <nav>
          <navItem>
          <Header/>
          </navItem>
          <navItem className = 'projects'>
              <img src ={projectImg} width={1000} height={500} alt='(imageNotValid)'/>
              <Projects projects= {this.state.projects} onEdit ={this.handleEditProject.bind(this)} onDelete ={this.handleDeleteProject.bind(this)}/>
          </navItem>
          <navItem>
            <img src ={courseImg} width={1000} height={500} alt='(imageNotValid)'/>
              <Courses  courses = {this.state.courses}  onEdit ={this.handleEditCourse.bind(this)}  onDelete = {this.handleDeleteCourse.bind(this)}/>
          </navItem>
          <navItem>
            <img src ={todoImg} width={1000} height={500} alt='(imageNotValid)'/>
              <Todos todos = {this.state.todos} onEdit = {this.handleEditTodo.bind(this)} onDelete = {this.handleDeleteTodo.bind(this)} />
          </navItem>
          <navItem>
            <Footer/>
          </navItem>
        </nav>

      </div>
    );
  }
}

export default App;
