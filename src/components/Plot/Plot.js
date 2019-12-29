import React, { Component } from 'react'
import './Plot.css'


class Plot extends React.Component {

  state = {
      
    plotPlants: [],
    plantList: [],
    height:0,
    width:0,
    grid:[],
    currentPlot:[],
    plotBackground:'brown'
  }


componentDidMount = () => {
  fetch('/plot')
  .then(response =>  response.json())
  .then(plotPlants => 
      this.setState({
          plotPlants: plotPlants
      })
  );
}

handleChange = (event) =>{
  this.setState({ [event.target.id]: event.target.value })
}

plantSelection=(event)=>{
  event.preventDefault();
  console.log(event.target.style.backgroundColor)
  this.state.currentPlot.style.backgroundColor=event.target.style.backgroundColor

}

plotSelection=(event)=>{
  event.preventDefault();
  console.log(event.target.style.backgroundColor)
  this.setState({
      currentPlot:event.target
  })
}

deletePlot=(event)=>{
  event.preventDefault()
  this.setState({
      grid:[]
  })
}

makeGrid = (event) => {
  event.preventDefault();
let divs=[];
let grid=[];
for(let i = 1; i<=(this.state.height*this.state.width); i++) {
    divs.push(i)
}  
  grid = divs.map((id) => {
  return (<div onClick={this.plotSelection} id = {id} className='plot' style={{width:'50px', height:'50px', backgroundColor:'brown'}}></div>)
});
this.setState({
    grid:<div>
              <div className='container2' style={{width: (this.state.width*50)}}>{grid}</div>
              <button onClick={this.deletePlot}>
                  Delete Plot
              </button>
          </div>
})
}

render() {

  return (
      <div>
      <h2>My Plot</h2>
      <form onSubmit={this.makeGrid}>
          <label htmlFor='height'>Height</label>
          <input type='number' value={this.state.height} onChange={this.handleChange} id='height' />
          <label htmlFor='width'>Width</label>
          <input type='number' value={this.state.width} onChange={this.handleChange} id='width' />
          <input type='submit' />
      </form>
      
        {this.state.grid}
        <div onClick={this.plantSelection} className='draggable' style={{backgroundColor:'orange'}}>

        </div>

      </div>
  )
}
}

export default Plot
