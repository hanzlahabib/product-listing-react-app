import React from 'react';
import { Card } from '..';
import { Container } from './CardsContainerStyles';

const CardsContainer = ({ products }) => {
  return (
    <Container>
      {products.map((product, key) => (
        <Card product={product} key={key}/>
      ))}
    </Container>
  );
};

export default CardsContainer;
