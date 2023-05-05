import React from 'react';
import {Outlet} from 'react-router-dom'
import About from '../about/About';
import Header from '../utils/header/Header';


const Layout = () => {
  return (
<div>
    <Header />
     <Outlet />
    </div>
  )
}

export default Layout