import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser  } from '@fortawesome/free-regular-svg-icons'
import { faUserMinus, faMagnifyingGlass, faBasketShopping} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = ['소개', '공지사항', '메뉴', '주문', '쿠폰' ]
    const navigate = useNavigate();

    // 로고 클릭 시 메인으로 이동
    const goToMain = () => {
        navigate('/');
    }

    // 로그인 페이지 이동
    const goToLogin = () => {
       navigate('/login');
    }

    // 로그아웃
    const goToLogut = () => {
        setAuthenticate (false)
    }

    // 장바구니
    const bascketNavigate = useNavigate();
    const goToBascket = () => {
        bascketNavigate('/basket');
    }

    // 검색
    const goSearch = (e) => {
        if(e.key == 'Enter'){
            // 입력한 검색어를 읽어와서
            let keyword = e.target.value;
            // url을 바꿔준다
            navigate('/?q='+`${keyword}`);
        }
    }

  return (
    <div style={{'backgroundColor' : '#dc5c51'}}>
        {/* 로그인 버튼 영역 (s) */}
        <div className="login-button">
            { !authenticate &&  
                <p onClick={goToLogin}><span><FontAwesomeIcon icon={faUser} /></span> 로그인</p>
            }
            {authenticate &&         
                <>
                <p onClick={goToBascket}><span><FontAwesomeIcon icon={faBasketShopping}/></span> 장바구니</p>
                <p onClick={goToLogut}><span><FontAwesomeIcon icon={faUserMinus} /></span> 로그아웃</p> 
                </>
            }
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
            <input className="search-box" type="text" onKeyDown={(e) => {goSearch(e)}}/>
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