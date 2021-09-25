import { Card, CardContent, CardMedia, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './BlogCard.module.css';
import medium from '../../../assets/images/medium.png';

const clipTitle = (title) => {
  if (title.length < 20)
    return (
      title +
      Array(40 - title.length)
        .fill('\xa0')
        .join('')
    );
  else if (title.length > 40) return title.substring(0, 37) + '...';
  else return title;
};

const BlogCard = (props) => {
  const { title, content, link, tags, handleClick } = props;
  const blogTitle = clipTitle(title);

  const cardClickHandler = () => {
    const newWindow = window.open(link, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const shareHandler = () => {
    handleClick(link);
  };

  return (
    <Card>
      <CardActionArea onClick={cardClickHandler}>
        <CardMedia component="img" image={medium} alt="green iguana" />
        <CardContent>
          <h1 className={classes.cardTitle}>{blogTitle}</h1>
          <p className={classes.cardContent}>{content}</p>
          <div style={{ marginTop: '16px' }}>
            <span className={classes.tags}>#{tags[0]}</span>
            <span className={classes.tags}>#{tags[1]}</span>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ px: 2, pb: 2 }}>
        <Link className="button" to="#" onClick={shareHandler}>
          Share
        </Link>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
