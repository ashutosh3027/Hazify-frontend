import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () =>{ setClick(!click);
  }
  const closeMobileMenu = () => setClick(false);
  const handleClickScroll = () => {
    closeMobileMenu();
    const element = document.getElementById('sevices-section');
    console.log(element);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClickScrollAbout = () => {
    closeMobileMenu();
    const element = document.getElementById('about-section');
    console.log(element);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          &#60;Hazify/&#62;
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
               to="#sevices-section"
                className='nav-links'
                onClick={handleClickScroll}
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='#about-section'
                className='nav-links'
                onClick={handleClickScrollAbout}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
