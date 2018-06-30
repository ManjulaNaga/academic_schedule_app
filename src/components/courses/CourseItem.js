import React,{Component} from 'react';
import deleteimg from '../../delete_Icon.png';
import editImg from '../../edit.png';
import PropTypes from 'prop-types';

class CourseItem extends Component{
  deleteCourse(id){
    console.log('delete course');
    this.props.onDelete(id);
  }
  editCourse(id){
    this.props.onEdit(id);
  }
  render(){
    return(
      <div className = 'courses'>
        <center>
        <table>
              <tr>
                <td>{this.props.course.courseId}</td>
                <td>{this.props.course.courseName}</td>
                <td><img src ={editImg} width={15} height={15} alt='(imageNotValid)' onClick={this.editCourse.bind(this,this.props.course.id)}/></td>
                <td><img src = {deleteimg} alt ="" height ={15} width ={15} onClick={this.deleteCourse.bind(this,this.props.course.id)}/></td>
              </tr>
        </table>
      </center>
      </div>
    );
  }
}
CourseItem.propTypes = {
  onDelete : PropTypes.func,
  course : PropTypes.object
}
export default CourseItem;
