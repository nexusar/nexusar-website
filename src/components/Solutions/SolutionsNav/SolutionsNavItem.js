import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './SolutionsNavItem.module.css';

const SolutionsNavItem = (props) => {
  const { index, icon, name, selected, setSelected } = props;

  const clickHandler = () => {
    let newSelected = Array(10).fill(false);
    setSelected(newSelected);
    newSelected[index] = !selected[index];
    setSelected(newSelected);
  };

  return (
    <Container className={classes.item} sx={{ textDecoration: selected[index] ? 'underline' : 'none' }}>
      <Link to="#" onClick={clickHandler}>
        <i className={`fas fa-${icon} ${classes.icon}`}></i>
        <div>
          <small>{name}</small>
        </div>
      </Link>
    </Container>
  );
};

export default SolutionsNavItem;
