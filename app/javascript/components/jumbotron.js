import React, {Component} from 'react'

class Jumbotron extends Component{
  render(){
    return(
      <div class="jumbotron jumbotron-billboard">
        <div class="img"></div>
          <div class="container">
              <div class="row">
                  <div class="col-lg-12">
                    <h1>Pets Finder</h1>
                      <p>
                          Reuniting San Diego owners with their lost family members
                      </p>
                      <a href="pets/new" class="btn btn-primary">New Pet </a>

                  </div>
              </div>
          </div>
      </div>
    )
  }
}
export default Jumbotron
