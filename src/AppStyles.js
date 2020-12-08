import styled from 'styled-components';
import { pixelToViewportWidth as px2vw } from './utils';

export const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: ${px2vw(25)};
  padding: ${px2vw(25)};
  position: relative;
`;
