import React,{Component} from 'react';
import PropTypes from 'prop-types';

class AddProject extends Component{
  constructor(){
    super();
    this.state = {
      newProject : {}
    }
  }
  handleSubmit(e){
    console.log("Add new project here");
    this.setState({newProject:{
      title : this.refs.title.value,
      category : this.refs.category.value,
    }},function(){
      this.props.addProject(this.state.newProject);
    });
    console.log(this.state);
    this.refs.title.value = '';
    this.refs.category.value = '';
    e.preventDefault();

  }
  render(){
    return(
      <div>
        <form onSubmit = {this.handleSubmit.bind(this)} >
        <input className = 'input' type ='text' ref = 'title'/>
        <input className = 'input' type ='text' ref = 'category'/>
        <input type = 'submit' value = 'Add Project'/>
      </form>
      </div>
    );
  }
}
AddProject.propTypes = {
  addProject: PropTypes.func,
};

export default AddProject;
