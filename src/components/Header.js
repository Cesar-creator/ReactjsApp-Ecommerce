import React, { useContext, useState } from 'react'

// images
import mobileMenuIcon from '../images/icon-menu.svg';
import closeIcon from '../images/icon-close.svg';
import productNail from '../images/image-product-1-thumbnail.jpg';
import deleteIcon from '../images/icon-delete.svg';
import Logo from '../images/logo.svg';
import chartIcon from '../images/icon-cart.svg';
import Avatar from '../images/image-avatar.png';
import productNail1 from '../images/image-product-1-thumbnail.jpg';

// Context

import { ThemeContext } from '../context/useThemeContext';


export const Header = () => {

  const { sideBarTheme, setSideBarTheme, itemNumber, setItemNumber } = useContext(ThemeContext);
  const [chartIsOpen, setchartIsOpen] = useState(false);

  const handleOpenSideBar = () => {
    //setSideBarIsOpen(true);
    setSideBarTheme(true);
  };

  const handleCloseSideBar = () => {
    //setSideBarIsOpen(false);
    setSideBarTheme(false);
  };



  return (
    <header>
      <div className="app__subHeader">
        <img className="menu-icon" src={mobileMenuIcon} alt="menu-icon" onClick={handleOpenSideBar} />
        <img src={Logo} alt="logo" />
        <div className={`SideBar ${sideBarTheme ? "showBar" : "hidden"}`}>
          <img className="close-icon" src={closeIcon} alt="close" onClick={handleCloseSideBar} />
          <a className="app__menu">Collections</a>
          <a className="app__menu">Men</a>
          <a className="app__menu">Women</a>
          <a className="app__menu">About</a>
          <a className="app__menu">Contact</a>
        </div>
      </div>

      <div className="app__subHeader2">
        <div className="cart-wrapper" onClick={() => setchartIsOpen(!chartIsOpen)} >
          {itemNumber > 0 ? <p>{itemNumber}</p> : null}
          <img className="chart" src={chartIcon} />
        </div>
        <img src={Avatar} alt="logo" className="app__Avatar" />
      </div>

      <div className={chartIsOpen ? "basket-wrapper" : "hidden"}>
            <p className="basket-title">Cart</p>
            {itemNumber > 0 ? <div className="cart-item">
                    <div className="cart-item-wrapper">
                      <img className="cart-item-img" src={productNail1} alt="cart-item"/>
                      <div className="cart-item-container">
                        <div>
                          <p>Automn Limited Edition...</p>
                        </div>
                        <p>$125.00 x {itemNumber} <span>${(itemNumber*125)}</span></p>
                      </div>
                      <img  className = "deletedIcon" src={deleteIcon} alt="delete-icon" onClick={() => setItemNumber(itemNumber - 1)}/>
                    </div>
                    <button>Checkout</button>
                 </div> : 
                    <div className="product">
                    <p>Your Cart is empty.</p>
                  </div>
            }
        </div>
    </header>
  )
}
