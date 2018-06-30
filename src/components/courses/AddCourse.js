import React,{Component} from 'react';

class AddCourse extends Component{
  constructor(){
    super();
    this.state ={
      newCourse :{}
    }
  }
  handleSubmit(e){
    if(this.refs.courseId.value === ''){
      alert("course id is required.");
    }
    else{
      this.setState({newCourse:
      {
        courseId : this.refs.courseId.value,
        courseName : this.refs.courseName.value
      }
    },function(){
      this.props.addCourse(this.state.newCourse);
    });
    this.refs.courseId.value ='';
    this.refs.courseName.value ='';
    e.preventDefault();
  }}
  render(){
    return(
      <div>
        <form  onSubmit = {this.handleSubmit.bind(this)}>
          <input type = "number" ref = "courseId" />
          <input type = "text" ref = "courseName" />
          <input type = "submit" value = "Add Course"  />
        </form>
      </div>
    );
  }
}

export default AddCourse;
