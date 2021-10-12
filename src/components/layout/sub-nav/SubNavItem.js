import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';
import classes from './SubNavItem.module.css';

const SubNavItem = (props) => {
  const { itemId, icon, name } = props;

  const location = useLocation();
  const history = useHistory();
  const urlParams = location.pathname + `/${itemId}`;

  const clickHandler = () => {
    history.push(urlParams);
  };

  return (
    <Container className={classes.item}>
      <Link to="#" onClick={clickHandler}>
        <i className={`fas fa-${icon} ${classes.icon}`}></i>
        <div>
          <small>{name}</small>
        </div>
      </Link>
    </Container>
  );
};

export default SubNavItem;
