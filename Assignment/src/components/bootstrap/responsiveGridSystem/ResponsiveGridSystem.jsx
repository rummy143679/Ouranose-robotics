import React from 'react'
import './ResponsiveGridSystem.css'

export default function ResponsiveGridSystem() {
  return (
    <>
      <div className='container'>
        <h5>Basic columns</h5>
        <div className='row'>
          <div className="col">col1</div>
          <div className="col">col2</div>
          <div className="col">col3</div>
        </div>
      </div>
      <div className='container'>
      <h5>Basic columns 2</h5>
      <div className='row'>
        <div className="col">col1</div>
      </div>
      <div className='row'>
        <div className="col">col1</div>
      </div>
      <div className='row'>
        <div className="col">col1</div>
      </div>
    </div>
    </>
  )
}
