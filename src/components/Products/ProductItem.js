import { Fragment } from 'react';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import classes from './ProductItem.module.css';

const ItemContent = () => {
  return (
    <Grid item xs={12} sm={3}>
      <h1 className={classes.bigHeader}>
        iPad <i style={{ color: '#8738a7', fontFamily: 'Pacifico' }}>mini</i>
      </h1>
      <h2>Mega power. Mini size.</h2>
      <p>Powerful, colorful, and wonderful. Get ready for the ultimate experience</p>
      <Box py={1} />
      <Link to="#" className={classes.button}>
        Learn More
      </Link>
    </Grid>
  );
};

const ItemImage = (props) => {
  const { number } = props;
  const imageClass = `image${number}`;

  return (
    <Grid item xs={12} sm={6}>
      <img className={classes[imageClass]} alt="ipad-mini" />
    </Grid>
  );
};

const ProductItem = (props) => {
  return (
    <Fragment>
      <Box my={2} pt={4} sx={{ backgroundColor: 'white' }}>
        <Grid container sx={{ textAlign: 'center', alignItems: 'center', overflow: 'hidden' }} spacing={4}>
          <Grid item sm={3}></Grid>
          <ItemContent />
          <ItemImage number={0} />
        </Grid>
      </Box>
      <Box my={2} pt={4} sx={{ backgroundColor: 'white' }}>
        <Grid container sx={{ textAlign: 'center', alignItems: 'center', overflow: 'hidden' }} spacing={4}>
          <ItemImage number={1} />
          <Grid item sm={2}></Grid>
          <ItemContent />
          <Grid item sm={1} md={3}></Grid>
        </Grid>
      </Box>
      <Box my={2} pt={4} sx={{ backgroundColor: 'white' }}>
        <Grid container sx={{ textAlign: 'center', alignItems: 'center', overflow: 'hidden' }} spacing={4}>
          <Grid item sm={1}></Grid>
          <ItemContent />
          <Grid item sm={1}></Grid>
          <ItemImage number={2} />
          <Grid item sm={1}></Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default ProductItem;
