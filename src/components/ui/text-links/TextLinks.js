import { Link } from 'react-router-dom';
import classes from './TextLinks.module.css';

const TextLinks = (props) => {
  const { text, path, isAnimated } = props;
  const linkClass = isAnimated ? classes.link_animated : classes.link;

  return (
    <Link to={path} className={linkClass}>
      <span className={classes.link_text}>{text}</span>{' '}
      <i className="fas fa-chevron-right" style={{ fontSize: 10 }}></i>
    </Link>
  );
};

export default TextLinks;
