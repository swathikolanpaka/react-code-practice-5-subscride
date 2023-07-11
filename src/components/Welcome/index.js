// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true}

  onButtonClick = () => {
    this.setState(prevState => ({
      isSubscribe: !prevState.isSubscribe,
    }))
  }

  render() {
    const {isSubscribe} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading"> Welcome</h1>
          <p className="description">Thank you!Happy Learning</p>
          <button onClick={this.onButtonClick}>
            {isSubscribe ? 'Subscribe' : 'Subscribed'}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
