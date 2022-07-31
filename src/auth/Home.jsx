import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if(window.localStorage.getItem('loginToken') === null){
      alert('로그인이 필요합니다!');
      navigate('/login');
    }
  },[])
  
  return (
    <div>홈입니다!</div>
  )
};
