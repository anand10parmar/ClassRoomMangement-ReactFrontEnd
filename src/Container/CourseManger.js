import React, {Component} from 'react'
import CourseCard from '../Component/CourseCard';
import ModuleList from './ModuleList';
export default class CourseManager extends Component{
    render(){
        return (
            <div className="container-fluid">
                <ModuleList/>
                <h1>Course Manager</h1>
                <div className="card-deck">
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                    <CourseCard/>
                </div>
            </div>
        )
    }
}