import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import CourseManager from './Container/CourseManger'
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Stateless from './Component/Stateless'
import Hello from './Component/Hello'
ReactDOM.render(
    <CourseManager/>,
    document.getElementById('root')
);