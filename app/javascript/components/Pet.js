import React, {Component} from 'react'

class Pet extends Component{
  constructor(props){
    super(props)
    this.state = {
      pets: this.props.pets
    }
  }
  render(){
    var href = "pets/"
    var pets = this.state.pets.map(function(p){
      return(
        <tr>
          <td key={p.species}>{p.species}</td>
          <td key={p.name}>{p.name}</td>
          <td key={p.color}>{p.color}</td>
          <td key={p.place}>{p.place}</td>
          <td key={p.time}>{p.time}</td>
          {console.log(p.id)}
          <td><a href={'pets/' + p.id} className="btn btn-info">More Info</a></td>
        </tr>
      )
    })
    return(
      <div className="page_header">
        <h1>Lost Pets of San Diego!</h1>
        <table className="table table-striped table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th> Species </th>
              <th> Name </th>
              <th> Color </th>
              <th> Last Location </th>
              <th> Time Seen </th>
              <th></th>
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
