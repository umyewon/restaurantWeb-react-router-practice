import {useEffect, useState} from 'react'
import MenuCard from '../component/MenuCard'
import {Container, Row, Col} from  'react-bootstrap'

const MenuAll = () => {
  const [menuList, setMenuList] = useState([]);

  const getMenu = async() => {
    let url = 'http://localhost:5000/menu'
    let response = await fetch(url)
    let data = await response.json();
    setMenuList(data);
  }

  useEffect(()=>{
    getMenu();
  },[])

  return (
    <div>
        <Container>
          <Row>
            {menuList.map((menu) => {
              return(
                   <Col xs={6} md={4} key={menu.id}>
                    <MenuCard item={menu} />
                  </Col>
              )
            })}
          </Row>
        </Container>
    </div>
  )
}

export default MenuAll