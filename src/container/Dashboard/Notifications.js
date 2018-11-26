import React, { Component } from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import TopNav from '../../components/Dashboard/TopNav';
import Notification from '../../components/Dashboard/Notifications';

class Notifications extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <div id="wrapper">
                <TopNav />
                <Notification />
                </div>
            </div>
        );
    }
}

export default Notifications;
