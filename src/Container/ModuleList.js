import React from 'react';
import ModuleListItem from '../Component/ModuleListItem';

export default class ModuleList extends React.Component {
    render() {
        return(
        <ul className="list-group">
            <ModuleListItem/>
            <ModuleListItem/>
            <ModuleListItem/>
        </ul>
        );
    }
}