import React from 'react';
import CourseRow from "../component/CourseRow";
import CourseService from "../service/CourseService"
export default class CourseList extends  React.Component {
    constructor (){
        super();
        this.courseService = CourseService instanceof ) {

        }

    }
    render(){
        return (
            <div>
            <h2>Course List</h2>
                <table className="table">
                    <thead><tr><th>Title</th></tr></thead>
                    <tbody>
                        <CourseRow/>
                        <CourseRow/>
                        <CourseRow/>
                        <CourseRow/>
                        <CourseRow/>
                    </tbody>
                </table>
            </div>
        )
    }
}