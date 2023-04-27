import React, { useEffect, useState } from 'react'
import './Pagination.css'

export default function Pagination(props) {
  const numbers = []
  for(let i=1 ;i <= (Math.ceil(props.totalData/6)) ; i++ ){
    numbers.push(i)
  }

  const numElements = numbers.map(n => <div className='col-md-1' key={n} onClick={props.pageHandler(n)}>{n}</div> )
  return (
    <div className='row'>
      {
        numElements
      }
      <div className="col-md-1">{`>>`}</div>
    </div>
  )
}
