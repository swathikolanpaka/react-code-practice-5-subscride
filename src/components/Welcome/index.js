// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  authBtn = () => {
    const {isSubscribe} = this.state

    if (isSubscribe === true) {
      return <button>Subscribe</button>
      this.setState(prevState => {
        isSubscribe: !prevState.isSubscribe
      })
    } else {
      return <button>Subscribed</button>
      this.staState(prevState => {
        isSubscribe: !prevState.isSubscribe
      })
    }
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
