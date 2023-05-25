import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineShopping } from 'react-icons/ai';
import Home from '../pages/index';

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

import { useState } from 'react';

import Logo from '../public/img/Logos/devengers_vault_logo3.png';

import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  console.log();

  return (
    <div className="navbar-container">
      <div className="logo">
        <Link href="/" >
            <Image src={Logo} alt="Logo" className="navbar-logo" />
        </Link>
      </div>

      <nav>
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="">Shop</Link></li>
            <li><Link href="">Bid</Link></li>
            <li><Link href="">Category</Link></li>
            <li><Link href="">FaQ</Link></li>
        </ul>
      </nav>

      <div className="search-tool">
        <input type="text" name="searchbar" placeholder="Search here..."/>
        <button type="submit" name="search" ><p className="search-icon"><AiOutlineSearch /></p></button>
      </div>

      <div className="navbar-right">
        <div className="login">
            <div className="username">
                <p>Welcome, <b>Guest </b>! </p>
            </div>
            <Link href="./login">
                <button type="submit" name="login" id="login">Login </button>
            </Link>
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