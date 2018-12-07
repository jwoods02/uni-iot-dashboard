import React, { Component } from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import NavTop from '../../components/Dashboard/TopNav';
import GraphDashboard from '../../components/Dashboard/GraphDashboard';

class Dashboard extends Component {

    constructor(props){
        super(props);        
            this.state = {
              sidebarOpen: true
            };

        this.handleViewSidebar = this.handleViewSidebar.bind(this);
    }

    handleViewSidebar(){
        this.setState({
            sidebarOpen: !this.state.sidebarOpen});
      }

    render() {
        if (this.state.sidebarOpen === true) 
        return (
            <div>
            <NavTop onClick={this.handleViewSidebar}/>

            <div id="wrapper">
             <Sidebar isOpen={this.state.sidebarOpen} />
             <GraphDashboard />
             </div>
         </div>
        ) 
        else 
        return (
            <div>
               <NavTop onClick={this.handleViewSidebar}/>

               <div id="wrapper">
                <GraphDashboard />
                </div>
            </div>
        );
    }
}

export default Dashboard;