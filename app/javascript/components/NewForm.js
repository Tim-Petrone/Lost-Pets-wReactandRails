import React, {Component} from 'react'

class NewForm extends Component {
  render(){
    return(
      <h1>New Pet</h1>
      <%= render 'form', pet: @pet %>
      <%= link_to 'Back', pets_path %>
    )
  }
}

export default NewForm
