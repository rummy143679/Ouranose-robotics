import React from 'react'
import cardImg from '../../assets/Image.jpg'
import './RecentPost.css'
import { Link } from 'react-router-dom'

export default function RecentPost(props) {
  return (
    <div className='col-md-6 mb-2'>
      <div className="card content-card md-2">
        <img src={cardImg} className="card-img-top" alt="card-image" />
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">{props.subtittle}</h6>
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <Link to="/Details">Read Full Article</Link>
          {/* <a className='nav-link'>Read Full Article</a> */}
        </div>
      </div>

    </div>
  )
}
