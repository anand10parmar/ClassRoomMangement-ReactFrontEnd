import React from 'react';

export default class CourseCard
    extends React.Component{

    render(){
        return (
            <div className="card">
                <img className="card-img-top" styles={{width:'18rem'}}
                     src="https://picsum.photos/300/200"
                     alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Card Text.</p>
                        <a href="#" className="btn btn-primary">More...</a>
                    </div>
            </div>
        )
    }
}