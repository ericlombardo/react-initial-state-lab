import React, { Component } from 'react'

export default class ImageSlider extends Component {
  constructor() {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }

  handleCurrentSlide() {
    return `I am on slide ${this.state.currentSlideIndex}`
  }
  render() {
    return (
      <div>
        {this.handleCurrentSlide()}
      </div>
    )
  }
}
