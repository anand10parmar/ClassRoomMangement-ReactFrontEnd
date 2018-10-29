import React from 'react';

export default class  ModuleListItem  extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <li className = "list-group-item">
                {this.props.module.title}
                <span className="float-right">
                    <button onClick={()=>{this.props.delete(this.props.module.id)}} className="btn btn-danger fa fa-trash"></button>
                    <button className="btn btn-primary fa fa-pencil"></button>
                </span>
            </li>
        );
    }
}