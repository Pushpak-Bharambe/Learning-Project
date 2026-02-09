import styled from "styled-components";

const ErrorDiv = styled.div`
  height: 20rem;
  width: 40rem;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 500px;
  margin-top: 100px;
  box-shadow: 0 0 30px black;
`;

const H1 = styled.h1`
  color: #905151;
  font-family: cursive;
  font-size: xxx-large;
`;

const Img = styled.img`
  height: 20rem;
  width: 20rem;
`;

export const PageNotFound = () => {
  return (
    <ErrorDiv>
      <Img src="404.jpg" alt="404"></Img>
      <H1>404 Page Not Found :(</H1>
    </ErrorDiv>
  );
};
