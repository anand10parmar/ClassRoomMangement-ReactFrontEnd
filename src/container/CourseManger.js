import React, {Component} from 'react'
import CourseCard from '../component/CourseCard';
import ModuleList from './ModuleList';
import LessonTabs from './LessonTabs';
import CourseEditor from './CourseEditor'
import CourseList from './CourseList'
import {BrowserRouter as Router,Link, Route} from 'react-router-dom'

export default class CourseManager extends Component{
    render(){
        return (
            <Router>
                <div className="container-fluid">
                    <h1>Course Manager</h1>
                    <Route path ="/courses"
                           component={CourseList}/>
                </div>
            </Router>
        );
    }
}