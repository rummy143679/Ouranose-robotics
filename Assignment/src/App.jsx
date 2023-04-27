import React from 'react'
import './App.css'
import Dashboard from './components/dashboard/Dashboard'
import DesktopBlogidea from './components/desktopBlogidea/DesktopBlogidea'
import {
  BrowserRouter,
  Route,
  Routes,
  Outlet
} from 'react-router-dom'


function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Details" element={<DesktopBlogidea />} />
        </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
  )
}

export default App

      // <Router>
      //   <Routes>
      //     <Route path="/" element={<Navbar2 />}>
      //       <Route index element={<Home />} />
      //       <Route path="About" element={<About />} />
      //       <Route path="Contact" element={<Contact />} />
      //       {/* <Route path="*" element={<NoPage />} /> */}
      //     </Route>
      //   </Routes>
      // </Router>