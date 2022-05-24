import React from 'react';
import {Link, useNavigate} from "react-router-dom";


const Homepage = () => {
    //함수 호출할거없이 버튼누르면 바로 가는걸 원하면 link to 사용
    const navigate = useNavigate()
    const goProductPage=()=>{
        navigate('/products?q=pants')
        //쿼리 뒤에 있는 값은 url 경로에 영향을 미치지 않음
    }
  return (
    <div>
        <h1>하이홈페이지</h1>
        <Link to="/about">go to about </Link>
        <button onClick={goProductPage}>go to product page</button>
    </div>
  )
}

export default Homepage