import React from "react";
import styled from "styled-components";
import InfoIcon from '@material-ui/icons/Info';
import ChatInput from './chatInput';

function Chat() {
  return (
    <Container>
      <Header>
          <Channel>
                <ChannelName> #Rachel</ChannelName>
                <ChannelInfo>Channel Info</ChannelInfo>
          </Channel>
          <ChannelDetails>
              <div>
                 Details
              </div>
              <Info><InfoIcon /></Info> 
          </ChannelDetails>
          
      </Header>
      <MessageContainer></MessageContainer>
      <ChatInput />
              </Container>
  );
}
export default Chat;
 const Info=styled(InfoIcon)`
 margin-left: 10px;`
const Container = styled.div`
  display: grid;
  grid-template-rows: 64px auto min-content;
`; //divided into 3 rows
const Header = styled.div`
padding-left:20px;
padding-right 20px;
display: flex;
align-items: center;
border-bottom: 1px solid rgb(83,83,101);
justify-content: space-between;
`;
const Channel = styled.div``
const ChannelName = styled.div`
font-weight: 700;`

const ChannelInfo = styled.div`
font-weight:400;
color: #606060;
fontsize: 13px;
margin-top: 8px;
`
const ChannelDetails = styled.div`
display:flex;
align-items: center;
color: #606060;

`
const MessageContainer = styled.div``;

