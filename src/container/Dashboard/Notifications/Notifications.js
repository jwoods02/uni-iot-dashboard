import React, { Component } from 'react';
import Sidebar from '../../../components/Dashboard/Sidebar'
import NavTop from '../../../components/Dashboard/TopNav';
import Notifications from '../../../components/Dashboard/Notifications';

class Dashboard extends Component {
    render() {
        return (
            <div>
               <NavTop />

               <div className="row">
                <Sidebar />
                <Notifications />

                </div>
            </div>
        );
    }
}

export default Dashboard;