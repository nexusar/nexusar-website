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

  const navTextItems = ['Home', 'About Us', 'Products', 'Solutions', 'Blogs', 'Support', 'Leadership', 'Careers'];

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
              <Link to="/login" className="nav-link nav-link-login"></Link>
            </li>
          </ul>

          {/* <!-- /.nav-list nav-list-mobile -->  */}

          <ul className="nav-list nav-list-larger">
            <li className="nav-item search-hiden">
              <input
                className="nav-link nav-link-searchbar"
                type="text"
                placeholder="&#xF002; &nbsp; Search NexuSAR"
                style={{ fontFamily: 'Arial, FontAwesome' }}
              />
            </li>
            <li className="nav-item nav-item-hidden">
              <Link to="/" className="nav-link nav-link-apple"></Link>
            </li>

            {navTextItems.map((item) => (
              <NavTextItem key={item} text={item} link={`/${item.toLowerCase().replace(/ /g, '-')}`} />
            ))}

            <li className="nav-item">
              <Link to="/search" className="nav-link nav-link-search"></Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link nav-link-login"></Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
