import { Fragment } from 'react';
import { Box, Container, Divider } from '@mui/material';
import RecentUpdates from '../../components/layout/recent-updates/RecentUpdates';
import ProductItem from '../../components/Products/ProductItem';

const Products = () => {
  return (
    <Fragment>
      <RecentUpdates />
      <Container sx={{ py: 2, textAlign: 'center' }}>
        <h1>Here are the products that we offer.</h1>
        <p>
          Our thinnest, lightest notebook, completely transformed by the Apple M1 chip. CPU speeds up to 3.5x faster.
          GPU speeds up to 5x faster. Our most advanced Neural Engine for up to 9x faster machine learning. The longest
          battery life ever in a MacBook Air. And a silent, fanless design. This much power has never been this ready to
          go.
        </p>
        <Divider sx={{ py: 1 }} />
      </Container>
      <ProductItem />
      <Box py={4} />
    </Fragment>
  );
};

export default Products;
