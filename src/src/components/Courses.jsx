import React, { Component, Fragment } from 'react'
import { Loader, Navbar } from '../components'

export default class Courses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {

    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 500)

  }


  render() {
    return (
      this.state.isLoading ? <Loader type={"bars"} /> : <Fragment>
        <Navbar />
        <div className="mtspace">
          courses
        </div>
      </Fragment>

    )
  }
}