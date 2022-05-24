import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
    //오브젝트가 반환이되고 키값(id)과 밸류값 가져옴
    const {id} = useParams();
    //{ id } 이런식으로 파라미터를 {}에 넣으면 값으로 바로 가져올 수있다

  return (
    <div>
       <h1>디테일!{id}</h1> 
    </div>
  )
}

export default ProductDetailPage