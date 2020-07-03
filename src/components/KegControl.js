import React from 'react'
import KegList from './KegList'

class KegControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      masterKegList: [{name: "fake keg", brand: "fake brand", price: 10, alcoholContent: 5}, {name: "fake keg2", brand: "fake brand", price: 10, alcoholContent: 5}]
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <KegList kegList = {this.state.masterKegList}/>
      </React.Fragment>
    )
  }
}

export default KegControl