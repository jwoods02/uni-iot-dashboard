import React, { Component } from 'react'

export default class sensorTableCom extends Component {
  constructor(props){
    super(props);
    this.state={
      indicator: "red"
    }
  }

    componentWillMount(){
      if (this.props){
        if (this.props.value < 18){
          this.setState({indicator: ""})
        }
      }
}
  render() {
    return (
        <tbody>
                  <tr>
                    <td>{this.props.id}</td>
                    <td>{this.props.type}</td>
                    <td className={this.state.indicator}>{this.props.value}</td>
                    <td>{this.props.date}</td>
                    <td>Hays Hosptial</td>
                  </tr>
                </tbody>
    )
  }
}
