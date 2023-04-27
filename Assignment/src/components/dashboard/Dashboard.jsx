import React from 'react'
import './Dashboard.css'
import Content from '../content/Content'
import NavbarCom from '../navbarCom/NavbarCom'

export default function Dashboard() {
  return (
    <div className='Dashboard'>
        <div className='header'>
            <NavbarCom />
            <div className='DashboardText'>
              <h1>Transforming Agriculture with Technology</h1>
              <h6>Revolutionizing Agriculture through Innovation: Explore the Latest Trends and Technologies in Agri-Tech with Ouranos Robotics' Leading Blog</h6>
            </div>
        </div>
        <div className="content ms-4 me-4 mt-2 md-2">
            <Content />
        </div>
    </div>
  )
}
