import React from 'react';
import { Card } from '../../components';
import { Container } from './CardsHolderStyles';

const CardsHolder = ({ products }) => {
  console.log(products);
  return (
    <Container>
      {products.map((product) => (
        <Card product={product} />
      ))}
    </Container>
  );
};

export default CardsHolder;
