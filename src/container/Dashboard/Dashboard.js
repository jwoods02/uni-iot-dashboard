import React, { Component } from 'react';
import Nav from '../../components/Dashboard/Nav';
import NavTop from '../../components/Dashboard/TopNav';

class Dashboard extends Component {
    render() {
        return (
            <div>
               <NavTop />
                <Nav />
            </div>
        );
    }
}

export default Dashboard;