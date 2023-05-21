
import React from 'react'
import './Cart.css'
import img from '../../../assets/car/810c2593-38a2-46a1-9f1c-f28cc209c842.webp'

const Cart = () => {
  return (
    <div className="product-item">
  <img src={img} />
  <div className="product-list">
    <h3>Маленькое черное платье</h3>
    <span className="price">₽ 1999</span>
    <a href="" className="button">
      В корзину
    </a>
  </div>
</div>

  )
}

export default Cart