import React, {Component} from 'react'

class Jumbotron extends Component{
  render(){
    return(
      <div className="jumbotron jumbotron-billboard">
        <div className="img"></div>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                    <h1>Pets Finder</h1>
                      <p>
                          Reuniting San Diego owners with their lost family members
                      </p>
                      <a href="pets/new" className="btn btn-primary">New Pet </a>

                  </div>
              </div>
          </div>
      </div>
    )
  }
}
export default Jumbotron
