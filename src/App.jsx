import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router";

/* 페이지 목록 : 전체상품페이지, 로그인 , 상세상품 페이지 */
import MenuAll from './page/MenuAll'
import Login from './page/Login'
import PrivateRoute from './route/PrivateRoute';
/* 페이지 목록 (e) */

/* 컴포넌트 목록 */ 
import Navbar from './component/Navbar'
import { Link } from 'react-router-dom';
/* 컴포넌트 목록 (e)*/

// 1.유저는 메뉴와 상품들을 볼 수 있다. -> 전제,상세상품
// 1-1. Navigation bar 생성
// 2.유저는 로그인을 할 수 있다. -> 로그인페이지
// 3.유저는 상품디테일을 보기 위해 로그인을 해야한다.
// 4.로그인한 유저는 상품디테일정보를 볼 수 있다.
// 5.유저는 상품을 검색할 수 있다.
// 6.유저는 로그아웃할 수 있다.

function App() {
  const [ authenticate, setAuthenticate ] = useState(false);  // t:로그인 / f:로그아웃
  const [ bascket, setBascket ] = useState(null);             // 장바구니

  return (
    <div>
      <Navbar authenticate = {authenticate} setAuthenticate = {setAuthenticate}/>      {/* 네비게이션 바 */}
      <Routes>
        <Route path="/" element={<MenuAll authenticate = {authenticate} />}/>
        <Route path="/login" element={<Login setAuthenticate = {setAuthenticate}/>}/>
        <Route path="/product/:id" element={<PrivateRoute from = {'product'} authenticate = {authenticate}/>}/>
        <Route path="/basket" element={<PrivateRoute from = {'bascket'} authenticate = {authenticate}/>}/>
      </Routes>
    </div>
  )
}

export default App
