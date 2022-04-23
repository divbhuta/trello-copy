import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
   display: flex;
   flex-direction: row;
   flex: 1;
   color: black;
   background-color:  #0099ff   ;
   align-items: center;
   padding: 5px;
   font-weight: bold;
   font-size: 20px;
   height: 50px;

   .left_side {
    flex: 0.1;
   }

   .middle {
     flex: 0.9;
   }

   button {
    border: 1px solid black;
    color: black;
    background: #0099ff;
    cursor: pointer;
   }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="left_side">Trello-Clone</div>
      <div className="middle" />
      <div>
        <button>SignOut</button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
