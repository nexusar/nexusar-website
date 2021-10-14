import { Fragment } from 'react';
import { Box, Container } from '@mui/material';
import RecentUpdates from '../../components/layout/recent-updates/RecentUpdates';
import ProductItem from '../../components/Products/ProductItem';

const Products = () => {
  return (
    <Fragment>
      <RecentUpdates />
      <Container sx={{ py: 2, textAlign: 'center' }}>
        <h1>Here are the products that we offer.</h1>
      </Container>
      <ProductItem />
      <Box py={4} />
    </Fragment>
  );
};

export default Products;
