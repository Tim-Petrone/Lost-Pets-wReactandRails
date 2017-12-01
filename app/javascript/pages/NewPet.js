
import React, {Component} from 'react'
import Navbar from 'components/navBar.js'

class NewPet extends Component{

  render(){
    return(
      <div>
        <Navbar />
        <NewForm />
      </div>
    )
  }
}
export default NewPet
