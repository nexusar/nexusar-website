import { useHistory, useRouteMatch } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import classes from './LeaderCard.module.css';

const LeaderCard = (props) => {
  const { name, designation, image } = props;
  const history = useHistory();
  const match = useRouteMatch();

  const clickHandler = () => {
    const newUrl = `${match.url}/${name.toLowerCase().replace(/ /g, '-')}`;
    history.push(newUrl);
  };

  return (
    <Card>
      <CardActionArea onClick={clickHandler}>
        <CardMedia component="img" image={image} alt="executive-image" sx={{ borderRadius: 0 }} />
        <CardContent sx={{ fontFamily: 'SF Pro Text Regular' }}>
          <h3 className={classes.cardTitle}>{name}</h3>
          <p>{designation}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default LeaderCard;
