import React, { Component } from 'react'
import {
    Route,
    Switch
} from 'react-router-dom'
import axios from 'axios'

import NavBar from '../NavBar/NavBar'
import Plot from '../Plot/Plot'
import PlantChart from '../PlantChart/PlantChart'
import ViewAllPlants from '../ViewAllPlants/ViewAllPlants'
import './App.css'

class App extends Component {
    constructor () {
        super() 

        this.state = {

        }
    }
    
    render () {
        return (
            <div>
                <NavBar />
                <div className='body'>
                    <Switch>
                        <Route path='/plot'
                        render={() => {
                            return (
                            <Plot />
                            )
                        }}
                        />
                        <Route path='/plantchart'
                        render={() => {
                            return (
                            <PlantChart />
                            )
                        }}
                        />
                        <Route path='/viewall'
                        render={() => {
                            return (
                                <ViewAllPlants />
                            )
                        }}
                        />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default App