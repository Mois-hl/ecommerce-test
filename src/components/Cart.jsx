import './Cart.css'
import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'

export function Cart (){
  const cartCheckboxId = useId()

  return (
    <> 
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />
      <aside className='cart'>
        <ul>
          <li>
            <img 
              src='https://cdn.dummyjson.com/products/images/smartphones/iPhone%206/thumbnail.png'
              alt='iphone 6'
            />
            <div>
              <strong>iPhone</strong> - $1499
            </div>
            
            <footer>
              <small>
                Qty: 1
              </small>
              <button>+</button>
            </footer>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}