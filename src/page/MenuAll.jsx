import {useEffect, useState} from 'react'
import { useSearchParams  } from 'react-router-dom'
import MenuCard from '../component/MenuCard'
import {Container, Row, Col} from  'react-bootstrap'
import { ClipLoader } from "react-spinners";

const MenuAll = ({ authenticate }) => {
  const [ menuList, setMenuList ] = useState([]);   // 메뉴 리스트
  const [ query, setQuery ] = useSearchParams();    // url 쿼리스트링 (검색용)
  const [ loading, setLoading ] = useState(false);  // 로딩바 설정
  const [ apiError, setApiError ] = useState('');   // 에러설정
  const [ searchResult, setSearchResult ] = useState('');  // 검색결과 T:있음 , F:없음

  const getMenu = async() => {
    let searchQuery = query.get('q') || "";
    try {
        setLoading(true);
        let url = `https://my-json-server.typicode.com/umyewon/restaurantWeb-react-router-practice/menu?q=${searchQuery}` // jsonServer에서 검색은 자동으로 해줌
        let response = await fetch(url)
        let data = await response.json();
        setMenuList(data);
        setLoading(false);
    } catch (err) {
      console.log(err.message);
      setApiError(err.message);
      setLoading(false);
    }
  }
  
  // jsonServer에서 검색은 자동으로 해주기 때문에 아래 함수사용X
  const search = () => {
    let regex =  new RegExp(query.get('q'));
    console.log('정규식 = ', regex)
    let answer = menuList.filter((item, index) => { // 조건에 대해 참인 모든 값 배열로 반환
        return regex.test(item);  // 정규식에 만족하면 T / 아니면 F
    })
    
    console.log("answer >>", answer);
  }

  useEffect(()=>{
    getMenu();
  },[query])

  useEffect(()=>{
    menuList == '' || menuList == null ? setSearchResult(false) : setSearchResult(true)
  }, [menuList])

  return (
    <div className="loadingWrap">
      {loading?<ClipLoader 
        color="#f88c6b"
          loading={loading}   // 로딩 show,hide 조절
          size={200}
          aria-label="Loading Spinner"
          data-testid="loader"
          /> : !apiError ? 
          (searchResult ? <Container>
            <Row>
              {menuList.map((menu) => {
                return(
                    <Col xs={6} md={4} key={menu.id}>
                      <MenuCard item={menu}/>
                    </Col>
                )
              })}
            </Row>
          </Container> : <div className="noSearchResult"><h2>검색 결과가 없습니다.</h2><img width={150} src="https://cdn-icons-png.flaticon.com/512/7466/7466073.png"/></div>) : <div className="loadingWrap loadingErrorMsg"><h2>잠시 후 다시 시도해 주십시오.</h2></div>
      }
      
    </div>
  )
}

export default MenuAll