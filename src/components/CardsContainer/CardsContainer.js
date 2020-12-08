import React from 'react';
import { Card } from '..';
import { Container } from './CardsContainerStyles';

const CardsContainer = ({ products }) => {
  return (
    <Container>
      {products.map((product) => (
        <Card product={product} />
      ))}
    </Container>
  );
};

export default CardsContainer;
