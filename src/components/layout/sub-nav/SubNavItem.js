import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import classes from './SubNavItem.module.css';

const SubNavItem = (props) => {
  const { itemId, icon, name, pathname } = props;
  const history = useHistory();
  const urlParams = pathname + `/${itemId}`;

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
