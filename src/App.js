import React, { useEffect } from 'react';
import { CardsContainer, Form } from './components';
import { Container } from './AppStyles';
import { useSelector } from 'react-redux';
import GlobalStyle from './Styles/global';
const App = () => {
  const products = useSelector((state) => state.products);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Form />
        <CardsContainer products={products} />
      </Container>
    </>
  );
};

export default App;
