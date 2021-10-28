import { Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './SolutionsNavDropItem.module.css';

const SolutionsNavDropItem = (props) => {
  const { itemId, title, desc } = props;
  const pathName = '/solutions';
  const urlParams = pathName + `/${itemId}`;

  const clickHandler = () => {
    console.log(itemId);
    console.log(urlParams);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Container className={classes.animatedContent}>
        <Link to={urlParams} onClick={clickHandler}>
          <h4 className={classes.link}>{title}</h4>
        </Link>
        <small>{desc}</small>
      </Container>
    </Grid>
  );
};

export default SolutionsNavDropItem;
