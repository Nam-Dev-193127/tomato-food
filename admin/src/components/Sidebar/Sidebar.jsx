import React from 'react'
import './Sidebar.css'
import {assets} from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Thêm sản phẩm</p>
        </NavLink>
      </div>
      <NavLink to='/list' className="sidebar-options">
        <div className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Danh sách sản phẩm đã thêm</p>
        </div>
      </NavLink>
      <NavLink to='/orders' className="sidebar-options">
        <div className="sidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Đặt hàng</p>
        </div>
      </NavLink>
    </div>
  )
}

export default Sidebar