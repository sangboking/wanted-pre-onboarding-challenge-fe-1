import React from 'react'
import styled from 'styled-components';
import Sidebar from '../Components/Sidebar/SideBar';

const Wrapper = styled.div`
  width:120rem;
  height:100vh;
  display: flex;
  background-color: #f5f6f8;
`;

export default function InsightTwit() {
  return (
    <Wrapper>
      <Sidebar/>

      
    </Wrapper>
  )
}
