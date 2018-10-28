import React from 'react';
import ModuleListItem from '../component/ModuleListItem';

export default class ModuleList extends React.Component {
    constructor(){
        super();
        this.state = {
            module: {title:''},
            modules:[
            {title: 'Module 1 - jQuery', id: 123},
            {title: 'Module 2 - React', id: 234},
            {title: 'Module 3 - Redux', id: 345},
            {title: 'Module 4 - Angular', id: 456},
            {title: 'Module 5 - Node.js', id: 567},
            {title: 'Module 6 - MongoDB', id: 678}]
        };
       this.titleChanged = this.titleChanged.bind(this);
       this.createModule = this.createModule.bind(this);
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