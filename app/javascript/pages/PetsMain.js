import React, {Component} from 'react'
import Pets from 'components/Pet.js'
import Navbar from 'components/navBar.js'
import Jumbotron from 'components/jumbotron.js'

class PetsMain extends Component{
  constructor(props){
    super(props)
    this.state = {
      pets: this.props.pets
    }
  }

  render(){
    return(
      <div>
        <Navbar />
        <Jumbotron />
        <Pets pets={this.state.pets} />
      </div>
    )
  }
}
export default PetsMain
