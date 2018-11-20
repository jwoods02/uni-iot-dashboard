import React, { Component } from 'react';

class Cards extends Component {
    render() {
        return (
          // <div id="content-wrapper">
    
            <div class="container-fluid">
    
              {/* <!-- Breadcrumbs--> */}
              <ol class="breadcrumb mt-3">
                <li class="breadcrumb-item">
                  <a href="#">Dashboard</a>
                </li>
                <li href="#" class="breadcrumb-item active">Overview</li>
              </ol>
    
              {/* <!-- Icon Cards--> */}
              <div class="row">
                <div class="col-xl-3 col-sm-6 mb-3">
                  <div class="card text-white bg-primary o-hidden h-100">
                    <div class="card-body">
                      <div class="card-body-icon">
                        <i class="fas fa-fw fa-comments"></i>
                      </div>
                      <div class="mr-5">View all notifications</div>
                    </div>
                    <a class="card-footer text-white clearfix small z-1" href="#">
                      <span class="float-left">View Details</span>
                      <span class="float-right">
                        <i class="fas fa-angle-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              
                
                <div class="col-xl-3 col-sm-6 mb-3">
                  <div class="card text-white bg-danger o-hidden h-100">
                    <div class="card-body">
                      <div class="card-body-icon">
                        <i class="fas fa-fw fa-life-ring"></i>
                      </div>
                      <div class="mr-5">View Each Sensons
                      </div>
                    </div>
                    <a class="card-footer text-white clearfix small z-1" href="#">
                      <span class="float-left">View Details</span>
                      <span class="float-right">
                        <i class="fas fa-angle-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            
    
              {/* <!-- Area Chart Example--> */}
              <div class="card mb-3">
                <div class="card-header">
                  <i class="fas fa-chart-area"></i>
                  Sesnor Histroic Data</div>
                <div class="card-body">
                  <canvas id="myAreaChart" width="100%" height="30"></canvas>
                </div>
                <div class="card-footer small text-muted">Updated 5 seconds ago</div>
              </div>
    
              {/* <!-- DataTables Example --> */}
              <div class="card mb-3">
                <div class="card-header">
                  <i class="fas fa-table"></i>
                  Tabluar Data format</div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                              <th>Sensor ID</th>
                              <th>Sensor Type</th>
                              <th>Sensor Value</th>
                              <th>Timestamp</th>
                              <th>Sesnor Location</th>
                              
                            </tr>
                          </thead>
                          <tfoot>
                            <tr>
                                <th>Sensor ID</th>
                                <th>Sensor Type</th>
                                <th>Sensor Value</th>
                                <th>Timestamp</th>
                                <th>Sesnor Location</th>
                            </tr>
                          </tfoot>
                          <tbody>
                            <tr>
                              <td>1123</td>
                              <td>Temperature</td>
                              <td>7 C</td>
                              <td>11:05:55</td>
                              <td>Hays Hosptial</td>
                            </tr>
                            <tr>
                                <td>1123</td>
                                <td>Temperature</td>
                                <td>6 C</td>
                                <td>11:06:00</td>
                                <td>Hays Hosptial</td>
                            </tr>
                            <tr>
                                <td>1123</td>
                                <td>Temperature</td>
                                <td>5 C</td>
                                <td>11:06:05</td>
                                <td>Hays Hosptial</td>
                            </tr>
                            <tr>
                                <td>1123</td>
                                <td>Temperature</td>
                                <td>6 C</td>
                                <td>11:06:10</td>
                                <td>Hays Hosptial</td>
                            </tr>
                            <tr>
                                <td>1123</td>
                                <td>Temperature</td>
                                <td>5 C</td>
                                <td>11:06:15</td>
                                <td>Hays Hosptial</td>
                            </tr>
                            <tr>
                                <td>1123</td>
                                <td>Temperature</td>
                                <td>6 C</td>
                                <td>11:06:20</td>
                                <td>Hays Hosptial</td>
                            </tr>
                            <tr>
                                <td>1123</td>
                                <td>Temperature</td>
                                <td>6 C</td>
                                <td>11:06:25</td>
                                <td>Hays Hosptial</td>
                            </tr>
                            <tr>
                                <td>1123</td>
                                <td>Temperature</td>
                                <td>7 C</td>
                                <td>11:06:30</td>
                                <td>Hays Hosptial</td>
                            </tr>
                            <tr>
                                <td>1123</td>
                                <td>Temperature</td>
                                <td>7 C</td>
                                <td>11:06:35</td>
                                <td>Hays Hosptial</td>
                            </tr>
                            <tr>
                                <td>1123</td>
                                <td>Temperature</td>
                                <td>7 C</td>
                                <td>11:06:40</td>
                                <td>Hays Hosptial</td>
                            </tr>
                            <tr>
                                <td>1123</td>
                                <td>Temperature</td>
                                <td>7 C</td>
                                <td>11:06:45</td>
                                <td>Hays Hosptial</td>
                            </tr>
                            <tr>
                                <td>1123</td>
                                <td>Temperature</td>
                                <td>7 C</td>
                                <td>11:06:50</td>
                                <td>Hays Hosptial</td>
                            </tr>
                            <tr>
                                <td>1123</td>
                                <td>Temperature</td>
                                <td>7 C</td>
                                <td>11:06:55</td>
                                <td>Hays Hosptial</td>
                            </tr>
    
                          </tbody>
                    </table>
                  </div>
                </div>
                <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
              </div>
    
            </div>
          
    
        );
    }
}

export default Cards;