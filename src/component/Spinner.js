import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <div className="spinner-border text-success " role="status">
            <span className="sr-only text-center"></span>
        </div>
      </div>
    )
  }
}

export default Spinner
