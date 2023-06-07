// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onChangeNum = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState({count: randomNum})
    console.log(randomNum)
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-con">
        <div className="random-con">
          <h1 className="head">Random Number</h1>
          <p className="des">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onChangeNum}>
            Generate
          </button>
          <h1 className="num">{count}</h1>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
