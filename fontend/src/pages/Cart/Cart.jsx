import React, { useContext } from 'react'
import './Cart.css'
import {StoreContext} from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const {cartItems,food_list,removeFromCart,getTotalCartAmount,url} = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Mặt hàng</p>
          <p>Tiêu đề</p>
          <p>Giá</p>
          <p>Số lượng</p>
          <p>Tổng cộng</p>
          <p>Loại bỏ</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item,index)=>{
            if(cartItems[item._id]>0)
              {
                return(
                  <div>
                    <div className='cart-items-title cart-items-item'>
                   <img src={url+"/images/"+item.image} alt="" />
                   <p>{item.name}</p>
                   <p>VNĐ{item.price}</p>
                   <p>{cartItems[item._id]}</p>
                   <p>VNĐ{item.price*cartItems[item._id]}</p>
                   <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                    </div>
                    <hr/>
                  </div>
                )
              }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Tổng số giỏ hàng</h2>
          <div>
            <div className="cart-total-details">
            <p>Tổng phụ</p>
            <p>VNĐ{getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Phí giao hàng</p>
              <p>VNĐ{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Tổng cộng</b>
              <b>VNĐ{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Tiến hành kiểm tra</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Nếu bạn có mã khuyến mãi, hãy nhập mã đó vào đây</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='Mã khuyễn mãi'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart