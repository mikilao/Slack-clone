import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
function Header() {
  return (
    <Container>
      <Main>
        <AccessTimeIcon />
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Start search" />
          </Search>
        </SearchContainer>
        <HelpOutlineIcon />
      </Main>
      <UserContainer>
        <Name>Rachel</Name>
        <UserImage>
          <img src={AccountBoxIcon} />
        </UserImage>
      </UserContainer>
    </Container>
  );
}

export default Header;
const Main = styled.div`
  display: flex;
  margin-left: 16px;
  margin-right: 16px;
`;
const Container = styled.div` 
background: #350d36;
  color: white;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
`;
const Search = styled.div`
  box-shadow: inset 0 0 0 1px rgb(104 74 104);
  width: 100%;
  border-radius: 6px;
  display: flex;
  input {
    background-color: transparent;
    border: none;
    padding: 4px 8px;
    color: white;
  }
  input:focus {
    ouline: none;
  }
`;
const SearchContainer = styled.div`
  min-width: 400px;
  margin-left: 16px;
  margin-right: 16px;
`;
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`;
const Name = styled.div`
  padding-right: 16px;
`;
const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 6px;
  img {
    width: 100%;
  }
`;
