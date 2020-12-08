import styled from 'styled-components';

export const Container = styled.div`
  flex: 3;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  @media (max-width: 730px) {
    flex: 1;
  }

`;
