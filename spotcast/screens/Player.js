import React from 'react';
import styled from 'styled-components';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronIcon } from '../components/icons/Chevron';
import { MoreVertIcon } from '../components/icons/MoreVert';

const Background = ({ children }) => {
    return (
     <LinearGradient
        colors={['#464769', '#1B1A1F']}
        style={{
          flex: 1,
          paddingTop: 50,
        }}>
        {children}
     </LinearGradient>
    );
};

const TopBar = styled.View `
  flex-direction: row;
`;

TopBar.Left = styled.View`
  flex: 1;
  padding-left: 16px;
`;
TopBar.Right = styled.View`
  flex: 1;
  padding-right: 16px;
  align-items: flex-end;
`;
TopBar.Middle = styled.View`
  flex: 2;
  align-items: center;
`;

TopBar.Title = styled.Text`
  color: white;
  text-transform: uppercase;
`;
TopBar.SubTitle = styled.Text`
  color: white;
  font-weight: bold;
`;


export function PlayerScreen() {
  return (
    <Background>
      <TopBar>
        <TopBar.Left>
          <ChevronIcon />
        </TopBar.Left>
          
        <TopBar-Middle>
            <TopBar.Title>
              Tocando Podcast
            </TopBar.Title>
            <TopBar.SubTitle>
              Hipsters Ponto Tech
            </TopBar.SubTitle>
        </TopBar-Middle>
          
        <TopBar.Right>
          <MoreVertIcon />
        </TopBar.Right>
      </TopBar>
    </Background>
  );
}