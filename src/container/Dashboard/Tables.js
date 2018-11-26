import React, { Component } from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import TopNav from '../../components/Dashboard/TopNav';
import Tables from '../../components/Dashboard/Tables';

class Notifications extends Component {
    render() {
        return (
            <div>
                <TopNav />
                <div id="wrapper">
                <Sidebar />
                <Tables />
                </div>
            </div>
        );
    }
}

export default Notifications;
