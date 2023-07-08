// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  authBtn = () => {
    const {isSubscribe} = this.state

    if (isSubscribe === true) {
      return <button className="btn-styles">Subscribe</button>
    }
    return <button className="btn-styles">Subscribed</button>
  }

  render() {
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading"> Welcome</h1>
          <p className="description">Thank you!Happy Learning</p>
          {this.authBtn()}
        </div>
      </div>
    )
  }
}

export default Welcome
