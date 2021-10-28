import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import SolutionsNavDropItem from './SolutionsNavDropItem';
import classes from './SolutionsNavDrop.module.css';

import allSolutionsData from '../../../../data/solutions.json';

const SolutionsNavDrop = (props) => {
  const { categoryID } = props;
  const filteredSolutionsData = allSolutionsData.filter((data) => data.category_id === categoryID);
  const data = filteredSolutionsData.map((filteredSolution) => {
    return { title: filteredSolution.name, desc: filteredSolution.l0_sub };
  });

  return (
    <div className={classes.dropContainer}>
      <Box sx={{ py: 4, px: { xs: 2, sm: 8 } }}>
        {!data.length && <small>No solution found under this domain. Please wait while we add more solutions.</small>}
        {data.length !== 0 && (
          <Grid container spacing={4} key={Math.random()}>
            {data.map((entry, index) => {
              const itemId = entry.title.toLowerCase().split(' ').join('-');
              return <SolutionsNavDropItem key={index} title={entry.title} desc={entry.desc} itemId={itemId} />;
            })}
          </Grid>
        )}
      </Box>
    </div>
  );
};

export default SolutionsNavDrop;
