import { Card, CardContent, CardMedia, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './BlogCard.module.css';

const clipTitle = (title) => {
  const titleLength = 40;
  if (title.length < titleLength)
    return (
      title +
      Array(titleLength - title.length)
        .fill('\xa0')
        .join('')
    );
  else if (title.length > titleLength) return title.substring(0, titleLength - 3) + '...';
  else return title;
};

const BlogCard = (props) => {
  const { title, content, link, tags, handleClick, image } = props;
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
        <CardMedia component="img" height="200px" image={image} alt="medium-url" />
        <CardContent>
          <div style={{ height: '220px' }}>
            <h1 className={classes.cardTitle}>{blogTitle}</h1>
            <p className={classes.cardContent}>{content}</p>
          </div>
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
