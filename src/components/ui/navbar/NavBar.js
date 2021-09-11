import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import NavTextItem from './NavTextItem';

const Navbar = () => {
  useEffect(() => {
    const selectElement = (element) => document.querySelector(element);

    selectElement('.mobile-menu').addEventListener('click', () => {
      selectElement('header').classList.toggle('active');
    });
  }, []);

  const navTextItems = ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support'];

  return (
    <header>
      <div className="container2">
        <nav>
          <ul className="nav-list nav-list-mobile">
            <li className="nav-item">
              <div className="mobile-menu">
                <span className="line line-top"></span>
                <span className="line line-bottom"></span>
              </div>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link nav-link-apple"></Link>
            </li>
            <li className="nav-item">
              <Link to="/bag" className="nav-link nav-link-bag"></Link>
            </li>
          </ul>

          {/* <!-- /.nav-list nav-list-mobile -->  */}

          <ul className="nav-list nav-list-larger">
            <li className="nav-item search-hiden">
              <input
                className="nav-link nav-link-searchbar"
                type="text"
                placeholder="&#xF002; Search apple.com"
                style={{ fontFamily: 'Arial, FontAwesome' }}
              />
            </li>
            <li className="nav-item nav-item-hidden">
              <Link to="/" className="nav-link nav-link-apple"></Link>
            </li>

            {/* <NavTextItem props={{ text: 'Store', link: '/store' }} />
            <NavTextItem props={{ text: 'Mac', link: '/mac' }} />
            <NavTextItem props={{ text: 'iPad', link: '/ipad' }} />
            <NavTextItem props={{ text: 'iPhone', link: '/iphone' }} />
            <NavTextItem props={{ text: 'Watch', link: '/watch' }} />
            <NavTextItem props={{ text: 'TV', link: '/tv' }} />
            <NavTextItem props={{ text: 'Music', link: '/music' }} />
            <NavTextItem props={{ text: 'Support', link: '/Support' }} /> */}

            {navTextItems.map((item) => (
              <NavTextItem text={item} link={`/${item.toLowerCase()}`} />
            ))}

            <li className="nav-item">
              <Link to="/search" className="nav-link nav-link-search"></Link>
            </li>
            <li className="nav-item">
              <Link to="/bag" className="nav-link nav-link-bag"></Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
