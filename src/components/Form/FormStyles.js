import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  padding: 0 10px;
`;
export const Title = styled.div`
  font-size: 18px;
  padding: 10px;
  text-align: center;
`;
export const Field = styled.div`
  display: flex;
  margin: 10px;
  flex-direction: column;
  input {
    padding: 10px;
    border: 1px solid rgba($color: #000000, $alpha: 0.3);
    outline: none;
    width: 100%;
    margin-bottom: 5px;
  }
  span {
    color: white;
    background-color: rgb(247 8 8 / 50%);
    padding: 5px;
    border-radius: 3px;
  }
`;
export const Submit = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: seagreen;
  color: white;
  text-align: center;
  transition: all 0.2s ease-in-out;
  &:not(.disabled) {
    cursor: pointer;
  }
  &:hover {
    background-color: rgba($color: #2e8b57, $alpha: 0.8);
    transition: all 0.2s ease-in-out;
  }
`;
