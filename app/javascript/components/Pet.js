import React, {Component} from 'react'

class Pet extends Component{
  constructor(props){
    super(props)
    this.state = {
      pets: this.props.pets
    }
    console.log(this.state.pets[0])
  }
  render(){
    var pets = this.state.pets.map(function(p){
      return(
        <tr>
          <td key={p.species}>{p.species}</td>
          <td key={p.name}>{p.name}</td>
          <td key={p.color}>{p.color}</td>
          <td key={p.place}>{p.place}</td>
          <td key={p.time}>{p.time}</td>
        </tr>
      )
    })
    return(
      <div class="page_header">
        <h1>Lost Pets of San Diego!</h1>
        <table class="table table-striped table-hover table-bordered">
          <thead class="thead-dark">
            <tr>
              <th> Species </th>
              <th> Name </th>
              <th> Color </th>
              <th> Last Location </th>
              <th> Time Seen </th>
            </tr>
          </thead>
          <tbody>
            {pets}
          </tbody>
        </table>
      </div>
    )
  }
}
export default Pet
