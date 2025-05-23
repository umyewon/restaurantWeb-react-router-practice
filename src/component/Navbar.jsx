import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser  } from '@fortawesome/free-regular-svg-icons'
import { faUserMinus, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const menuList = ['소개', '공지사항', '메뉴', '주문', '쿠폰' ]
    const mainNavigate = useNavigate();
    const goToMain = () => {
        mainNavigate('/');
    }
    const loginNavigate = useNavigate();
    const goToLogin = () => {
       loginNavigate('/login');
    }

  return (
    <div style={{'backgroundColor' : '#dc5c51'}}>

        {/* 로그인 버튼 영역 (s) */}
        <div>
            <div className="login-button" onClick={goToLogin}>
                <p><span><FontAwesomeIcon icon={faUser} /></span> 로그인</p>
            </div>
            {/* <div className="login-button">
                <FontAwesomeIcon icon={faUserMinus} />
                <p>logout</p>
            </div> */}
        </div>
        {/* 로그인 버튼 영역 (e) */}

        {/* 로고영역 (s) */}
        <div className="logo-section" onClick={goToMain}>   
            <img width={200} height={190} src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241205_87%2F1733387651014h3P6h_JPEG%2FIMG_2902.jpeg"/>
        </div>
        {/* 로고영역 (e) */}

        {/* 검색 (s) */}
        <div className="search-section">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input className="search-box" type="text" />
        </div>
        {/* 검색 (e) */}
       
        {/* 메뉴 버튼 (s) */}
        <ul className="menuBtn-list">
            {menuList.map((menu, index) => <li key={index}>{menu}</li>)}
        </ul>
        {/* 메뉴 버튼 (e) */}
    </div>
  )
}

export default Navbar