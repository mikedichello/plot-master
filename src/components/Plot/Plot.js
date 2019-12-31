import React, { Component } from 'react'
import './Plot.css'


class Plot extends React.Component {

  state = {
    
    plots:[],
    plotPlants: [],
    plantList: [],
    height:0,
    width:0,
    grid:[],
    currentPlot:[],
    plotBackground:'brown'
  }


componentDidMount = () => {
  fetch('/plots')
  .then(response =>  response.json())
  .then(plots => 
      this.setState({
          plots: plots
      })
  );
}

handleChange = (event) =>{
  this.setState({ [event.target.id]: event.target.value })
}

plantSelection=(event)=>{
  event.preventDefault();

  fetch('plots/' + id)
  console.log(event.target.style.backgroundColor)
  this.state.currentPlot.style.backgroundColor=event.target.style.backgroundColor

}

plotSelection=(event)=>{
  event.preventDefault();
  this.setState({
      currentPlot:event.target
  })
}

deletePlot=(id,event)=>{
  fetch('plots/' + id, {
    method: "DELETE"
}).then(data => {
    this.setState({
        plots: [
            ...this.state.plots.slice(0, index),
            ...this.state.plots.slice(index + 1)
        ]
    })
})
}
}

newPlot = (event) => {
  event.preventDefault();
  let subPlots=[];
  for(let i = 1; i<=(this.state.height*this.state.width); i++) {
    subPlots.push({
      key: i,
      height: '50px', 
      width: '50px', 
      background: 'brown',
      plantName: null,
      plantDescription: null,
      harvestTime: null,
      plantingTime: null})
  };
  fetch('/plots', {
    body:JSON.stringify({height: this.state.height, width: this.state.width, subPlot:subPlots}),
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }

  }).then(createdPlot => {
    return createdPlot.json
  }).then(jsonedPlot => {
    this.setState({
      height: 0,
      width: 0,
      plots: [...this.state.plots, jsonedPlot]
    })
  })

}

render() {

  return (
      <div>
      <h2>My Plot</h2>
      <form onSubmit={this.newPlot}>
          <label htmlFor='height'>Height</label>
          <input type='number' 
                 value={this.state.height} 
                 onChange={this.handleChange} 
                 id='height' />
          <label htmlFor='width'>Width</label>
          <input type='number' 
                 value={this.state.width} 
                 onChange={this.handleChange} 
                 id='width' />
          <input type='submit' />
      </form>
      {this.state.plots.map((plot,index)=> {
        return(
          <div className='plot' style={{width:plot.width*50}}> 
              {plot.subPlot.map((subplot,index)=> {
                return (
                  <div style={{width:subplot.width, 
                              height:subplot.height,
                              backgroundColor:subplot.background}}>
                  </div>
                )
              })}
          </div>
        )
      })}
        

      </div>
  )
}
}

export default Plot
