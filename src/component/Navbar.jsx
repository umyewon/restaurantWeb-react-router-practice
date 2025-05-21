import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser  } from '@fortawesome/free-regular-svg-icons'
import { faUserMinus, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const menuList = ['소개', '공지사항', '메뉴', '주문', '쿠폰', '문의' ]

  return (
    <div style={{'backgroundColor' : '#dc5c51'}}>

        {/* 로그인 버튼 영역 (s) */}
        <div>
            <div className="login-button">
                <FontAwesomeIcon icon={faUser}/>
                <p>로그인</p>
            </div>
            <div className="login-button">
                <FontAwesomeIcon icon={faUserMinus} />
                <p>로그아웃</p>
            </div>
        </div>
        {/* 로그인 버튼 영역 (e) */}

        {/* 로고영역 (s) */}
        <div className="logo-section">   
            <img width={250} src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20241205_87%2F1733387651014h3P6h_JPEG%2FIMG_2902.jpeg"/>
        </div>
        {/* 로고영역 (e) */}

        {/* 네비게이션 바 영역 (s) */}
        <div className="nav-section">   
            {/* 메뉴 버튼 */}
            <ul className="menuBtn-list">
                {menuList.map((menu, index) => <li key={index}>{menu}</li>)}
            </ul>

            {/* 검색 */}
            <div>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input className="search-box" type="text" />
            </div>
        </div>
        {/* 네비게이션 바 영역 (e) */}
    </div>
  )
}

export default Navbar