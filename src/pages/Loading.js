import { Fragment } from 'react';
import { Box } from '@mui/system';
import JumpingDots from '../components/ui/jumping-dots/JumpingDots';

const Loading = () => {
  return (
    <Fragment>
      <Box sx={{ height: 100 }} />
      <div className="centered">
        <JumpingDots padding="20" />
        <p>Loading</p>
      </div>
    </Fragment>
  );
};

export default Loading;
