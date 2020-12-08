import React, { useEffect } from 'react';
import { CardsHolder, Form } from '../../components';
import { HomeContainer } from './HomeStyles';
import { useSelector } from 'react-redux'
const Home = () => {
  const products = useSelector(state => state.products)
  console.log(products)
  return (
    <HomeContainer>
      <Form  />
      <CardsHolder products={products} />
    </HomeContainer>
  );
};

export default Home;
