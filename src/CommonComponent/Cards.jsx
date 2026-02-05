import styled from "styled-components";
import Icon from "@mui/material/Icon";

const StyledIcon = styled(Icon)`
  &&& {
    display: block;
    font-size: 12rem;
    color: #6f6fec;
  }
`;

const Box = styled.div`
  cursor: pointer;
  height: 20rem;
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #6f6fec;
  background-color: #ffffff;
  box-shadow: 0 0 10px black;
  text-align: center;
`;

export const Card = ({ icon, title, onClick }) => {
  return (
    <>
      <Box onClick={onClick}>
        <StyledIcon> {icon}</StyledIcon>
        <h1>{title}</h1>
      </Box>
    </>
  );
};
