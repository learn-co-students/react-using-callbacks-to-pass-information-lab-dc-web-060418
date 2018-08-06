import React, { Component } from 'react';
import { throws } from 'assert';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  onClickHandler = ()=>{
    let selectedColor = this.props.getSelectedColor()
    this.setState({
          color: selectedColor
        })
  }

  
  render() {
    return (
      <div onClick={this.onClickHandler} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
