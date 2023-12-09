import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {isPause: false, count: 25, time: 25 * 60, restart: false}

  PlayClick = () => {
    const {isPause} = this.state
    this.setState(prevState => ({isPause: !prevState.isPause}))
    this.setState(prevState => ({restart: !prevState.restart}))
    if (isPause) {
      clearInterval(this.counterId)
    } else {
      this.counterId = setInterval(() => {
        this.setState(prevState => ({
          time: prevState.time - 1,
        }))
      }, 1000)
    }
  }

  restart = () => {
    const {restart} = this.state
    this.setState({count: 25})
    this.setState({time: 25 * 60})
    if (restart) {
      this.setState(prevState => ({isPause: !prevState.isPause}))
      this.setState(prevState => ({restart: !prevState.restart}))
    }
    clearInterval(this.counterId)
  }

  increase = () => {
    const {isPause, count} = this.state
    if (!isPause) {
      this.setState(prevState => ({count: prevState.count + 1}))
      this.setState({time: (count + 1) * 60})
    }
  }

  decrease = () => {
    const {isPause, count} = this.state
    if (!isPause) {
      this.setState(prevState => ({count: prevState.count - 1}))
      this.setState({time: (count - 1) * 60})
    }
  }

  render() {
    const {isPause, count, time} = this.state
    const min = Math.floor(time / 60)
    const sec = time % 60
    return (
      <div className="container">
        <h1 className="main-heading">Digital Timer</h1>
        <div className="card">
          <div className="left-section">
            <div className="text">
              <h1 className="time">
                {min > 9 ? min : `0${min}`}:{sec > 9 ? sec : `0${sec}`}
              </h1>
              <p className="time-status">{isPause ? 'Running' : 'Paused'}</p>
            </div>
          </div>
          <div className="right-section">
            <div className="top">
              <div className="paly-pause">
                <button
                  className="img-button"
                  type="button"
                  onClick={this.PlayClick}
                >
                  <img
                    src={
                      isPause
                        ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
                    }
                    alt={isPause ? 'pause icon' : 'play icon'}
                    className="icon-image"
                  />
                </button>
                <button type="button" className="icon-des">
                  {isPause ? 'Pause' : 'Start'}
                </button>
              </div>
              <div className="paly-pause">
                <button
                  className="img-button"
                  type="button"
                  onClick={this.restart}
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="icon-image"
                  />
                </button>
                <p className="icon-des">Restart</p>
              </div>
            </div>
            <p className="mt20">set timer limit</p>
            <div className="bottom">
              <button type="button" onClick={this.decrease} className="sign">
                -
              </button>

              <button className="set-timer-btn" type="button">
                <p>{count}</p>
              </button>
              <button type="button" onClick={this.increase} className="sign">
                {' '}
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
