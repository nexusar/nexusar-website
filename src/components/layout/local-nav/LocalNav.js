import classes from './LocalNav.module.css';
import { Fragment } from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const LocalNav = (props) => {
  const { title, menuItems, buttonText } = props;

  return (
    <Fragment>
      <div className={classes.background}>
        <Grid container className={classes.container}>
          <Grid item xs={6} className={classes.title}>
            <Link to={`/${title.toLowerCase()}`}>{title}</Link>
          </Grid>
          <Grid item xs={6} className={classes.menu}>
            {menuItems.map((item) => (
              <Link key={item.toLowerCase()} to={`/${item.toLowerCase()}`} className={classes.menuItem}>
                {item}
              </Link>
            ))}
            <Link to={`/${buttonText.toLowerCase()}`} className="small-button">
              {buttonText}
            </Link>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default LocalNav;
