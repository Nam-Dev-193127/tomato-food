import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Giao hàng mọi nơi trong thời gian nhanh nhất, nhận hàng nhanh chóng. Hình ảnh chụp thật 100%, đảm bảo sản phẩm đúng như hình đăng tải. Liên hệ tư vấn nhanh chóng khi khách hàng đặt sản phẩm.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Công ty</h2>
                <ul>
                    <li>Trang chủ</li>
                    <li>Về chúng tôi</li>
                    <li>Vận chuyển</li>
                    <li>Chính sách bảo mật</li>
                </ul>
            </div>
            <div className="footer-content-right">
                  <h2>Liên lạc</h2>
                 <ul>
                    <li>+4567899</li>
                    <li>contact2@tomato.com</li>               
                </ul> 
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">
            Copyright 2024
        </p>
    </div>
  )
}

export default Footer