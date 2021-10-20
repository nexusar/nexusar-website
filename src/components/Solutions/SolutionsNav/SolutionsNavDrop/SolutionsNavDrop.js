import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import SolutionsNavDropItem from './SolutionsNavDropItem';
import classes from './SolutionsNavDrop.module.css';

const data = new Array(10).fill({
  title: 'Water Resource Management',
  desc: 'Water resource management is the activity of planning, developing, distributing and managing the optimum use of water resources',
});

const SolutionsNavDrop = () => {
  return (
    <div className={classes.dropContainer}>
      <Box sx={{ py: 8, px: { xs: 2, sm: 8 } }}>
        <Grid container spacing={4} key={Math.random()}>
          {data.map((entry, index) => {
            const itemId = entry.title.toLowerCase().split(' ').join('-');
            return <SolutionsNavDropItem key={index} title={entry.title} desc={entry.desc} itemId={itemId} />;
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default SolutionsNavDrop;
