import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser  } from '@fortawesome/free-regular-svg-icons'
import { faUserMinus, faMagnifyingGlass, faBasketShopping} from '@fortawesome/free-solid-svg-icons'
import { useNavigate, useLocation } from 'react-router-dom'

const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = ['소개', '메뉴', '주문' ]      // 메뉴 리스트
    const urlList = ['/intro', '/', '/order']       // 메뉴 url 리스트
    const [menuActive, setMenuActive] = useState('2');         // 메뉴 클릭 여부
    const navigate = useNavigate();
    const location = useLocation();

    // 로고 클릭 시 메인으로 이동
    const goToMain = () => {
        setMenuActive('2');
        navigate('/');
    }

    // 로그인 페이지 이동
    const goToLogin = () => {
       setMenuActive();
       navigate('/login');
    }

    // 로그아웃
    const goToLogut = () => {
        setAuthenticate (false)
    }

    // 장바구니
    const bascketNavigate = useNavigate();
    const goToBascket = () => {
        setMenuActive();
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

    // 메뉴버튼 클릭
    const clickMenuBtn = (e, index) => {
        setMenuActive(index);
        navigate(urlList[index])
    }

    useEffect(() => {
        console.log("menuActive ? ", menuActive)
    }, [menuActive])

    useEffect (()=> {
        let tempFlag = [];
        urlList.forEach((item, index) => {
            if( item == location.pathname ){
                setMenuActive(index)
                tempFlag.push(true);
            } else {
                tempFlag.push(false);
            }
        })

        let flag = tempFlag.every((item, index) => {
            return !item
        })

        if(flag){
            setMenuActive();
        }

    },[location])

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
            {menuList.map((menu, index) => <li key={index} className={ index == menuActive ? 'menuActive' : ''} onClick={(e)=>{clickMenuBtn(e,index)}}>{menu}</li>)}
        </ul>
        {/* 메뉴 버튼 (e) */}
    </div>
  )
}

export default Navbar