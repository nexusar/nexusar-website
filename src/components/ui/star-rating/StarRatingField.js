import StarRatings from 'react-star-ratings';
import { Grid } from '@mui/material';
import classes from './StarRatingField.module.css';

const StarRatingField = (props) => {
  const { rating, ratingChangeHandler } = props;
  return (
    <Grid item xs={7} className={classes.stars}>
      <StarRatings
        rating={rating}
        starRatedColor="#0071e3"
        starHoverColor="#0071e3"
        changeRating={ratingChangeHandler}
        starDimension="24px"
        starSpacing="4px"
      />
    </Grid>
  );
};

export default StarRatingField;
