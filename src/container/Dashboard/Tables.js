import React, { Component } from 'react';
import Sidebar from '../../components/Dashboard/Sidebar';
import TopNav from '../../components/Dashboard/TopNav';
import Tables from '../../components/Dashboard/Tables';

class Notifications extends Component {
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
            <TopNav onClick={this.handleViewSidebar}/>

            <div id="wrapper">
             <Sidebar isOpen={this.state.sidebarOpen} />
             <Tables />
             </div>
         </div>
        ) 
        else 
        return (
            <div>
               <TopNav onClick={this.handleViewSidebar}/>

               <div id="wrapper">
                <Tables />
                </div>
            </div>
        );
    }
}

export default Notifications;
