import {useEffect, useState} from 'react'
import { useSearchParams  } from 'react-router-dom'
import MenuCard from '../component/MenuCard'
import {Container, Row, Col} from  'react-bootstrap'

const MenuAll = ({ authenticate }) => {
  const [ menuList, setMenuList ] = useState([]);
  const [ query, setQuery ] = useSearchParams();

  const getMenu = async() => {
    let searchQuery = query.get('q') || "";
    console.log('searchQuery => ', searchQuery);
    let url = `https://my-json-server.typicode.com/umyewon/restaurantWeb-react-router-practice/menu?q=${searchQuery}` // jsonServer에서 검색은 자동으로 해줌
    let response = await fetch(url)
    let data = await response.json();
    setMenuList(data);
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
    //search();
  },[query])

  return (
    <div>
        <Container>
          <Row>
            {menuList.map((menu) => {
              return(
                   <Col xs={6} md={4} key={menu.id}>
                    <MenuCard item={menu}/>
                  </Col>
              )
            })}
          </Row>
        </Container>
    </div>
  )
}

export default MenuAll