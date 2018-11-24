import React, { Component } from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import NavTop from '../../components/Dashboard/TopNav';
import Cards from '../../components/Dashboard/GraphDashboard';
class Dashboard extends Component {
    render() {
        return (
            <div>
               <NavTop />
                <Sidebar />

                {/* todo - fix and rename card. isolate component.  */}

                {/* <Cards /> */}
            </div>
        );
    }
}

export default Dashboard;