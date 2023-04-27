import React from 'react'
import './TopPosts.css'

export default function TopPosts() {
  return (
    <div className="card col-md-12 w-auto h-auto" >
      <div className="card-body">
        <h5 className="card-title">Top posts</h5>
        <div className='row'>
          <div className='col-md-2 top-post-number'><p>1</p></div>
          <div className='col-md-10'>
            <div className='top-posts-text'>How Regenerative Agriculture is Changing the Game</div>
            <div className='top-posts-time'>Sustainable farming - march,2023</div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-2 top-post-number'><p>2</p></div>
          <div className='col-md-10'>
            <div className='top-posts-text'>Precision Agriculture 2.0: Using Artificial Intelligence to Optimize Crop Yields</div>
            <div className='top-posts-time'>Precision Agriculture - September 2021</div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-2 top-post-number'><p>3</p></div>
          <div className='col-md-10'>
            <div className='top-posts-text'>Breaking Ground: How Automation is Revolutionizing the Agriculture Industry</div>
            <div className='top-posts-time'>Industry News - May 2022</div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-2 top-post-number'><p>4</p></div>
          <div className='col-md-10'>
            <div className='top-posts-text'>How Ouranos Robotics' Smart Sensors are Transforming Crop Management</div>
            <div className='top-posts-time'> IoT - July 2021</div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-2 top-post-number'><p>5</p></div>
          <div className='col-md-10'>
            <div className='top-posts-text'>The Impact of Technology on the Agriculture Industry</div>
            <div className='top-posts-time'>Expert Insights - November 2021</div>
          </div>
        </div>

      </div>
    </div>
  )
}
