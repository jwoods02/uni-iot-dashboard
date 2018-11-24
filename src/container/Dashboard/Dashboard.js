import React, { Component } from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import NavTop from '../../components/Dashboard/TopNav';
import GraphDashboard from '../../components/Dashboard/GraphDashboard';

class Dashboard extends Component {
    render() {
        return (
            <div>
               <NavTop />

               <div className="row">
                <Sidebar />
                <GraphDashboard />

                </div>
            </div>
        );
    }
}

export default Dashboard;