import styled from "styled-components";
import { useState } from "react";
import Icon from "@mui/material/Icon";

const NavbarDiv = styled.nav`
  height: 4rem;
  width: 100%;
  /* background-color: #ece5e5; */
  /* background-color: #3e3ee86a; */
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 0 5px black;
  /* padding-right: 8rem; */
  top: 0;
  position: sticky;
`;

const H1 = styled.h1`
  color: #7f2e2e;
  font-family: math;
  padding-left: 5rem;
`;

const Sidebar = styled.div`
  height: 25rem;
  width: 15rem;
  background-color: #ffffff;
  color: #0b0202;
  margin-left: 80rem;
  margin-top: 30rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
  font-size: 1rem;
  padding-left: 1rem;
`;

const StyledIcon = styled(Icon)`
  &&& {
    color: #524949;
    font-size: 1.7rem;
  }
`;

const Ul = styled.ul`
  color: black;
  display: flex;
  margin-left: 35rem;
  justify-content: space-between;
  width: 50rem;
  list-style-type: none;
  font-family: system-ui;
  font-size: medium;
  // position: fixed;
`;

const UL = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style-type: none;
  font-size: 1.5rem;
`;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <NavbarDiv className="dashnav">
        <H1>LOGO</H1>
        <Ul>
          <li>Products</li>
          <li>Learns</li>
          <li>Patners</li>
          <li>
            <StyledIcon>notifications_active</StyledIcon>
          </li>

          <li>
            <StyledIcon onClick={() => setIsOpen((prev) => !prev)}>
              account_circle
            </StyledIcon>
          </li>
        </Ul>

        {isOpen && (
          <Sidebar>
            <h2>Profile</h2>
            <UL>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
            </UL>
          </Sidebar>
        )}
      </NavbarDiv>
    </>
  );
};
