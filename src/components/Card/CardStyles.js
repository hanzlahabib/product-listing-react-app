import styled from 'styled-components';
import { pixelToViewportWidth as px2vw } from '../../utils';

export const Container = styled.div`
  width: 250px;
  min-height: 220px;
  display: flex;
  margin: 10px 5px;
  padding: ${px2vw(20)};
  box-sizing: border-box;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.05);
  }
  @media (max-width: 1030px) {
    width: 280px;
  }
  @media(max-width: 380px){
    width: 100%;
  }

`;

export const Title = styled.div`
  font-size: 18px;
  margin: 10px 0;
  flex: 1;
`;

export const Description = styled.div`
  font-size: 16px;
  color: rgb(37, 37, 37);
  flex: 5;
  margin-bottom: 10px;
`;

export const Price = styled.div`
  position: absolute;
  right: 0;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  span {
    color: white;
    padding: 10px;
    font-size: 0.8em;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .date {
    text-align: right;
    color: gray;
    display: block;
  }

  .actions {
    display: block;
    cursor: pointer;
    svg {
      width: 22px;
      color: rgb(8 8 8 / 70%);
    }
  }
`;
