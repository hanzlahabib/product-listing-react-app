import React, { useEffect } from 'react';
import { CardsHolder, Form } from '../../components';
import { HomeContainer } from './HomeStyles';
import { useSelector } from 'react-redux';
import GlobalStyle from './Styles/global';
const App = () => {
  const products = useSelector((state) => state.products);

  return (
    <>
      <GlobalStyle />
      <HomeContainer>
        <Form />
        <CardsHolder products={products} />
      </HomeContainer>
    </>
  );
};

export default App;
