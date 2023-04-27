import React from 'react'
import './CategoryList.css'

export default function CategoryList() {
  return (
    <div className="card me-0 ms-0 w-auto h-auto p-1" >
      <h5 className="card-title ps-1">Catagories</h5>
      <ul className="list-grou list-group-flush ps-1">
            <li className="list-group-item">Automation</li>
            <li className="list-group-item">Iot</li>
            <li className="list-group-item">Pricision Agriculture</li>
            <li className="list-group-item">Sustainable Forming</li>
            <li className="list-group-item">Industry News</li>
            <li className="list-group-item">Case Studies</li>
            <li className="list-group-item">Tips & Tricks</li>
          </ul>
    </div>
  )
}
