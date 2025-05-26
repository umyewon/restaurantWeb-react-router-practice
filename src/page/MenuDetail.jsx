import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Form } from 'react-bootstrap';
const MenuDetail = () => {
  const {id} = useParams(); 
  const [menu, setMenu] = useState(null);

  const getMenuDetail = async() => { 
    let url = `https://my-json-server.typicode.com/umyewon/restaurantWeb-react-router-practice/menu/${id}`
    let response = await fetch(url)
    let data = await response.json();
    console.log("Data ? ", data);
    setMenu(data);
  }

  useEffect ( () => {
    getMenuDetail();
  }, [])

  return (
    <Container>
        <Row style={{'marginTop' : '8%'}}>
          <Col className='menu-img'>
            <img width="100%" src ={menu?.img}/>
          </Col>
          <Col>
            <div>
              <p className="menuDetail-title">{menu?.title}</p>
              <p className="menuDetail-des">{menu?.description}</p>
            </div>
            <p className="menuDetail-des">{ Number(menu?.price).toLocaleString('ko-KR')+ '원'} </p>
            <Form.Select size="sm" className="menuDetail-des">
              <option disabled>사이즈 선택</option>
              <option value="1">{menu?.size[0]}</option>
              <option value="2">{menu?.size[1]}</option>
            </Form.Select>
            <button className="redBtn" type="submit">  
              장바구니
            </button>

          </Col>
        </Row>
    </Container>
  )
}

export default MenuDetail