import React from "react";
import styled from "styled-components";
import AddIcon from '@material-ui/icons/Add';
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { sidebarItemsData } from "../data/SidebarData";

function Sidebar() {
    return (
        <Container>
            <WorkspaceContainer>
                <Name>New User</Name>
                <NewMessage>
                    <AddCircleOutlineIcon />
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {sidebarItemsData.map(item => (
                    <MainChannelItem>
                        {item.icon}
                        {item.text}
                    </MainChannelItem>
                ))}
            </MainChannels>
            <ChannelContainers>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon />
                </NewChannelContainer>
                <ChannelsList>
                    <Channel>
                   # Channel
                    </Channel>
                    <Channel>
                   # Channel 
                    </Channel>

                </ChannelsList>
            </ChannelContainers>
        </Container>
    );
}

export default Sidebar;

const Container = styled.div`
  background: #3f0340;
  padding-left: 20px;
`;
const WorkspaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align:items: center;
    padding-left: 19px;
    justify-content: space-between;
    bottom-border: 1px solid #532753;
`;
const Name = styled.div`
`;
const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  marign-right: 20px;
  cursor: pointer;
`;
const MainChannels = styled.div`
  color: white;
`;
const MainChannelItem = styled.div`
display: grid;
grid-template-columns: 15% auto;
height: 28px;
align-items:center;
padding-left: 19px
color: rgb(188, 171,188);
cursor: pointer;
`;
const ChannelContainers = styled.div`
 color: rgb( 188, 171, 188);
 margin-top: 10px;
`
const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left 19px;
    padding-right: 21px;
    :hover{
        background: #350d36;
    }
`
const ChannelsList = styled.div `

`
const Channel = styled.div `
height: 28px;
display: flex;
align-itmes: center;
padding-left: 19px;
cursor: pointer;
:hover{
    background: #350d36;
}
`