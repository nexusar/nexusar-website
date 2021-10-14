import classes from './RecentUpdates.module.css';
import { Fragment } from 'react';
import { Box } from '@mui/system';
import TextLinks from '../../ui/text-links/TextLinks';

const RecentUpdates = (props) => {
  return (
    <Fragment>
      <Box sx={{ height: 43 }} />
      <div className={classes.container}>
        <p>
          We at Nexusar are hiring employees. Get a chance to be a part of this amazing journey with us.{' '}
          <TextLinks text="Apply now" path="/careers" isAnimated="true" />
        </p>
      </div>
    </Fragment>
  );
};

export default RecentUpdates;
