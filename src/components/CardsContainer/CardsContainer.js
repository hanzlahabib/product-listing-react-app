import React from 'react';
import PropTypes from 'prop-types';
import { Card } from '..';
import { Container } from './CardsContainerStyles';

const CardsContainer = ({ products }) => {
  return (
    <Container>
      {products.map((product, key) => (
        <Card product={product} key={key} />
      ))}
    </Container>
  );
};

CardsContainer.propTypes = {
  products: PropTypes.array,
};
export default CardsContainer;
