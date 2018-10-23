import React,{Component} from 'react'
export default class Hello extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <h1>{this.props.message}</h1>
        );
    }
}