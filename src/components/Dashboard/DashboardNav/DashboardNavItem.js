import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './DashboardNavItem.module.css';

const DashboardNavItem = (props) => {
  const { itemId, icon, name, selected, onSelect } = props;
  const clickHandler = () => {
    onSelect(itemId);
  };

  return (
    <Container sx={{ color: `${selected ? '#0071e3' : '#1d1d1f'}` }} className={classes.item}>
      <Link to="#" onClick={clickHandler}>
        <i className={`fas fa-${icon} ${classes.icon}`}></i>
        <p>
          <small>{name}</small>
        </p>
      </Link>
    </Container>
  );
};

export default DashboardNavItem;
