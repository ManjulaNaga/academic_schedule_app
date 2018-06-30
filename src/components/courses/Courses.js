import React,{Component} from 'react';
import AddCourse from './AddCourse';
import CourseItem from './CourseItem';
import PropTypes from 'prop-types';

class Courses extends Component{
  handleClick(e){
    e.preventDefault();
    console.log("get all courses here");
  }
  handleAddCourse(course){
    let courses = this.props.courses;
    courses.push(course);
    this.setState({courses:courses});
  }
  deleteCourse(id){
    this.props.onDelete(id);
  }
  editCourse(id){
    this.props.onEdit(id);
  }
  render(){
    let courseItem;
    if(this.props.courses){
      console.log('in courses');
      console.log(this.props.courses);
      courseItem = this.props.courses.map(course =>
      {return(
        <div>
          <CourseItem onDelete = {this.deleteCourse.bind(this)} onEdit = {this.editCourse.bind(this)}key = {course.id} course = {course}/>
        </div>
      );})
    }
    return(
      <div className = 'courses'>
          <h2>Courses</h2>
          {courseItem}
          <br />
          <AddCourse addCourse = {this.handleAddCourse.bind(this)}/>
          <br/>
      </div>
    );
  }
}

Courses.propTypes = {
  courses: PropTypes.array,
  onDelete :PropTypes.func

};
export default Courses;
