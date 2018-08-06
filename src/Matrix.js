import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state ={
      color: "#fff"
    }
  }

  getColorState(){
    return this.state.color
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getColorState={()=> this.state.color} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

   setColorState(hexColor){
    this.setState({
      color: hexColor
    })
  }


  render() {
    return (
      <div id="app">
        <ColorSelector setColor={this.setColorState.bind(this)}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
  

}

Matrix.defaultProps = {
  values: chromeBoi
}

