import React from 'react';
import ModuleListItem from '../component/ModuleListItem';
import ModuleService from '../service/ModuleService';

export default class ModuleList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            module: {title: ''},
            modules: [],
            courseId: ""
        };
        this.moduleService=ModuleService.instance;
       this.titleChanged = this.titleChanged.bind(this);
       this.createModule = this.createModule.bind(this);
       this.setCourseId=this.setCourseId.bind(this);
    }
    componentWillReceiveProps(newProps){
        this.setCourseId(newProps.courseId);
        this.findAllModulesForCourse(newProps.courseId);
    }
    findAllModulesForCourse(courseId){
        console.log("module setted");
        this.moduleService.findAllModulesForCourse(courseId)
            .then((modules)=>{this.setModules(modules)});
    }
    setModules(modules){
        this.setState({modules:modules})
    }
    componentDidMount(){
        this.setCourseId(this.props.courseId);

    }
    setCourseId(courseId){
        this.setState({courseId:courseId});
    }
    titleChanged(event){
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
        this.moduleService
            .createModule(this.state.courseId,this.state.module)
            .then(this.findAllModulesForCourse(this.state.courseId));
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