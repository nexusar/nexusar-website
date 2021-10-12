import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './SubNavItem.module.css';

const SubNavItem = (props) => {
  const { itemId, icon, name, selected, onSelect } = props;
  const clickHandler = () => {
    onSelect(itemId);
  };

  return (
    <Container className={classes.item}>
      <Link to="#" onClick={clickHandler}>
        <i className={`fas fa-${icon} ${classes.icon}`}></i>
        <p>
          <small>{name}</small>
        </p>
      </Link>
    </Container>
  );
};

export default SubNavItem;
