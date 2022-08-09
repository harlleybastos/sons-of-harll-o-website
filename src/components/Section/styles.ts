import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 100%;
    height: auto;
  }
  > div {
    display: flex;
    height: 150px;
    margin: 5rem auto;
    background-color: #4e4e4e;
    width: 3px;
  }
`;
