import React, {useEffect, useState} from "react";
import styled from "styled-components";
import InfoIcon from '@material-ui/icons/Info';
import ChatInput from './chatInput';
import ChatMessage from './chatMessage';
import db from "../firebase";
import {useParams} from 'react-router-dom';

function Chat() {
  let {channelId} = useParams();
  const [channel, setChannel] = useState();
  
 
    const getChannel = () => {
        db.collection('rooms')
        .doc(channelId)
        .onSnapshot((snapshot)=>{
            setChannel(snapshot.data());
        })
    }

    useEffect(()=>{
        getChannel();
       // getMessages();
    }, [channelId])// listening for channel changes


  return (
    <Container>
      <Header>
          <Channel>
                <ChannelName> # { channel && channel.name}</ChannelName>
                <ChannelInfo>Channel Info</ChannelInfo>
          </Channel>
          <ChannelDetails>
              <div>
                 Details
              </div>
              <Info><InfoIcon /></Info> 
          </ChannelDetails>
          
      </Header>
      <MessageContainer>
          <ChatMessage />
      </MessageContainer>
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

