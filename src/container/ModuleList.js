import React from 'react';
import ModuleListItem from '../component/ModuleListItem';

export default class ModuleList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            module: {title: ''},
            modules: [],
            courseId: ""
        };
       this.titleChanged = this.titleChanged.bind(this);
       this.createModule = this.createModule.bind(this);
       this.setCourseId=this.setCourseId.bind(this);
    }
    componentWillReceiveProps(newProps){
        this.setCourseId
        (newProps.courseId);
    }

    componentDidMount(){
        this.setCourseId(this.props.courseId);
    }
    setCourseId(courseId){
        console.log("courseid",courseId);
        this.setState({courseId:courseId});
        console.log(this.state);
    }
    titleChanged(event){
        console.log(event.target.value);
       // this.state.module.title = event.target.value;
       this.setState({module: {title :event.target.value}});
    }
    renderListOfModules(){
        let modules =
                this.state.modules.map(
                    (module)=>
                        <ModuleListItem key={module.id} title= {module.title}/>);
        return modules;
    }
    createModule(event){
        console.log(this.state.module.title);
    }
    render() {
        return(
            <div>
                <input onChange={this.titleChanged}
                       className="form-control"
                       placeholder="New Module"/>
                <button onClick={this.createModule} className="btn btn-block btn-primary">
                    <i className="fa fa-plus"></i>
                </button>
                <ul className="list-group">
                    {this.renderListOfModules()}
                </ul>
            </div>
        );
    }
}