import { Fragment, useEffect, useState } from 'react';
import RecentUpdates from '../components/layout/recent-updates/RecentUpdates';
import { Box } from '@mui/system';
import { Alert, Container, Grid, Snackbar } from '@mui/material';
import Parser from 'rss-parser';
import BlogCard from '../components/layout/blog-card/BlogCard';
import { blogHelper } from '../utils/helpers/blog-helper';
import Loading from './Loading';

const Blogs = () => {
  const [mediumFeedJSON, setMediumFeedJSON] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const parser = new Parser();
    (async () => {
      let feed = await parser.parseURL('https://rocky-retreat-29330.herokuapp.com/medium.com/feed/@absatyaprakash01/');
      setMediumFeedJSON(feed.items);
    })();
  }, []);

  const handleClick = (link) => {
    setOpen(true);
    if (window.isSecureContext) navigator.clipboard.writeText(link);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  let blogComponent = <Loading />;

  if (mediumFeedJSON.length)
    blogComponent = (
      <Grid container spacing={4}>
        {mediumFeedJSON.map((item) => {
          let tags = ['#medium', '#medium'];
          for (let i in [0, 1]) tags[i] = item.categories[i] ? item.categories[i] : tags[i];
          const { subHeader, coverImageUrl } = blogHelper(item);

          return (
            <Grid key={item.guid} item xs={12} sm={6} md={4}>
              <BlogCard
                link={item.link}
                title={item.title}
                tags={tags}
                image={coverImageUrl}
                handleClick={handleClick}
                content={subHeader}
              />
            </Grid>
          );
        })}
      </Grid>
    );

  return (
    <Fragment>
      <RecentUpdates />
      <Box sx={{ mx: 'auto', width: 'fit-content' }}>
        <Container sx={{ py: 4 }}>
          <h1>Our Blogs</h1>
          <p>We share our stories on Medium. Here are some of them</p>
        </Container>
      </Box>
      <Container sx={{ py: 4 }}>{blogComponent}</Container>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert style={{ fontSize: '14px', fontFamily: 'SF Pro Text Regular' }}>
          The link has been copied to clipboard
        </Alert>
      </Snackbar>
    </Fragment>
  );
};

export default Blogs;
