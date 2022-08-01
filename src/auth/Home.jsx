import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if(window.localStorage.getItem('loginToken') === null){
      alert('로그인이 필요합니다!');
      navigate('/login');
    }
  },[])
  
  return (
    <TodoWrapper>
      1
    </TodoWrapper>
  )
};

const TodoWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;