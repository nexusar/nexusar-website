import { Link } from 'react-router-dom';
import './NavBar.css';

const NavTextItem = (props) => {
  const { text, link } = props.props;

  return (
    <li className="nav-item">
      <Link to={link} className="nav-link">
        {text}
      </Link>
    </li>
  );
};

export default NavTextItem;
