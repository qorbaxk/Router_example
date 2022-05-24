import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Productpage = () => {

    let [query,setQuery] = useSearchParams();
    console.log("쿼리는",query.get('page'));
    //쿼리 값 가져오기

  return (
    <div>
        <h1>show all products!</h1>
    </div>
  )
}

export default Productpage