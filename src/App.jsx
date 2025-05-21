import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router";

/* 페이지 목록 : 전체상품페이지, 로그인 , 상세상품 페이지 */
import ProductAll from './page/ProductAll'
import Login from './page/Login'
import ProductDetail from './page/ProductDetail';
/* 페이지 목록 (e) */

/* 컴포넌트 목록 */ 
import Navbar from './component/Navbar'
/* 컴포넌트 목록 (e)*/

// 1.유저는 메뉴와 상품들을 볼 수 있다. -> 전제,상세상품
// 1-1. Navigation bar 생성
// 2.유저는 로그인을 할 수 있다. -> 로그인페이지
// 3.유저는 상품디테일을 보기 위해 로그인을 해야한다.
// 4.로그인한 유저는 상품디테일정보를 볼 수 있다.
// 5.유저는 상품을 검색할 수 있다.
// 6.유저는 로그아웃할 수 있다.

function App() {
  return (
    <div>
      <Navbar/>      {/* 네비게이션 바 */}
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
      </Routes>
    </div>
  )
}

export default App
