import React, { Component } from 'react';
import NavTop from '../../Dashboard/Nav';
import NavTop from '../../Dashboard/NavTop';

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
