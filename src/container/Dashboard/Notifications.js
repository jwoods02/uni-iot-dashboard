import React, { Component } from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import TopNav from '../../components/Dashboard/TopNav';
import Notification from '../../components/Dashboard/Notifications';
import '../../App.css';

class Notifications extends Component {
    render() {
        return (
            <div>
                <TopNav />
                <div id="wrapper">
                <Sidebar />
                <Notification />
                </div>
            </div>
        );
    }
}

export default Notifications;
