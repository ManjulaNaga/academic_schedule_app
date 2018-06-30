import React,{Component} from 'react';
import deleteImg from '../../delete_Icon.png';
import editImg from '../../edit.png';
import PropTypes from 'prop-types';

class ProjectItem extends Component{
  deleteProject(id){
    this.props.onDelete(id);
  }
  editProject(id){
    this.props.onEdit(id);
  }
  render(){
    console.log('projects');
    console.log(this.props.project);
    return(
      <div>
        <table>
          <tr>
            <td> {this.props.project.title} </td>
            <td> {this.props.project.category} </td>
            <td> <img src ={editImg} width={15} height={15} alt='(imageNotValid)' onClick={this.editProject.bind(this,this.props.project.title)}/></td>
            <td><img src ={deleteImg} width={15} height={15} alt='(imageNotValid)' onClick={this.deleteProject.bind(this,this.props.project.category)}/></td>
          </tr>
        </table>
      </div>
    );
  }
}
ProjectItem.propTypes = {
  projects: PropTypes.array,
  onDelete :PropTypes.func
};
export default ProjectItem;
