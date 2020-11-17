import React, {Component} from 'react'
import {yes, no} from '../objects'

class StatementContainer extends Component {
  state = {
    clicked: false,
    yesObj: yes,
    noObj: no
  }

  clickHandler = () => {
    this.setState({
      clicked: !this.state.clicked
    }, () => console.log(this.state))
  }

  render() {
    return (
      <>
        <h1>{this.state.clicked ? this.state.yesObj["yes-statement"] : this.state.noObj["no-statement"]}</h1>
        <img onClick={this.clickHandler} src={this.state.clicked ? this.state.yesObj["yes-image"] : this.state.noObj["no-image"]} />
      </>
    )
  }
}

export default StatementContainer