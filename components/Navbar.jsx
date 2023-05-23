import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineShopping } from 'react-icons/ai';
import Home from '../pages/index';

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

import { useState } from 'react';

import Logo from '../public/img/Logos/devengers_vault_logo3.png';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  console.log();

  return (
    <div className="navbar-container">
      <div className="logo">
        <Image src={Logo} alt="Logo" className="navbar-logo" href="/" />
      </div>

      <nav>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="Shop">Shop</Link></li>
            <li><Link href="Auction">Bid</Link></li>
            <li><Link href="Auction">Category</Link></li>
            <li><Link href="Request">FaQ</Link></li>
        </ul>
      </nav>

      <div className="navbar-right">
        <div className="login">
            <div className="username">

            </div>

            <button type="submit" name="login" id="login"><Link href="/login-components/login_signup">Login</Link></button>
        </div>
        <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
            <AiOutlineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </div>
      {showCart && <Cart />}
    </div>
  )
  function WelcomeMessage() {
    const [userLogin, setUserLogin] = useState(null);
  
    return (
      <div className="username">
        {userLogin ? `Welcome <b>${userLogin}</b>` : 'Welcome Guest!'}
      </div>
    );
  }
}

export default Navbar