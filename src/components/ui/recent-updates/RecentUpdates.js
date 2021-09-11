import classes from './RecentUpdates.module.css';
import { Fragment } from 'react';
import { Box } from '@mui/system';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { Link } from 'react-router-dom';

const RecentUpdates = (props) => {
  return (
    <Fragment>
      <Box sx={{ height: 43 }} />
      <div className={classes.container}>
        <p>
          Save on Mac or iPad for university with education pricing. And get AirPods.{' '}
          <Link to="/apply" className={classes.link}>
            Shop Now
          </Link>
        </p>
        <ChevronRightRoundedIcon />
      </div>
    </Fragment>
  );
};

export default RecentUpdates;
