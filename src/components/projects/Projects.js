import React,{Component} from 'react';
//import ProjectItems from './ProjectItems';
import AddProject from './AddProject';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

class Projects extends Component{
handleClick(e){
  e.preventDefault();
  console.log("get all projects here ..");
}
handleAddProject(project){
  console.log(project);
  let projects = this.props.projects;
  projects.push(project);
  this.setState({projects:projects});
}
deleteProject(id){
  this.props.onDelete(id);
}
editProject(id){
  this.props.onEdit(id);
}

  render(){
    let projectItem;
    console.log(this.props.projects);

    if(this.props.projects){
      console.log('projects');
      console.log(this.props.projects);
      projectItem = this.props.projects.map(project =>
      {return(
        <div>
          <ProjectItem onDelete = {this.deleteProject.bind(this)} onEdit = {this.editProject.bind(this)} key = {project.id} project = {project}/>
        </div>
      );})
    }
    return(
      <div className="projects">
        <center>
        <h2>Projects</h2>
        {projectItem}
        <br />
        <AddProject addProject = {this.handleAddProject.bind(this)}/>
        <br />
      </center>
      </div>
    );
}
}
Projects.propTypes = {
  projects: PropTypes.array,
  onDelete :PropTypes.func
};
export default Projects;
