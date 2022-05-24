import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
//Navigate는 useNavigate랑 다르고 이것은 컴포넌트이며 리다이렉트하게 도와줌
import { Routes, Route, Navigate } from "react-router-dom";
import Productpage from './page/Productpage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import { useState } from "react";
import UserPage from './page/UserPage';

function App() {

   //false면 로그인 안한거 true면 로그인한거 가정
  const [authenticate,setAuthenticate] = useState(true);
 
  //대문자는컴포넌트
  const PrivateRoute = () =>{
    //로그인했으면 유저페이지로, 안했으면 네비게이트로 로그인 페이지로 튕기게만듦
    return authenticate == true? <UserPage/>:<Navigate to="/login"/>
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
        <Route path="/products" element={<Productpage/>}/>
        <Route path="/products/:id" element={<ProductDetailPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path='/user' element={<PrivateRoute/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
