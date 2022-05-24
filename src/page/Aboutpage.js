import React from 'react'
import { useNavigate } from 'react-router-dom'

const Aboutpage = () => {

    //함수안에서 써야하는 상황이다 그러면 네비게이트가 좋음
    const navigate = useNavigate();

    const goToHome=()=>{
        navigate('/');
    }
  return (
    <div>
        <h1>어바웃타임</h1>
        <button onClick={goToHome}>go to home</button>
    </div>
  )
}

export default Aboutpage