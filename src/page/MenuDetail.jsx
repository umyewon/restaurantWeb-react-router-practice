import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { ClipLoader } from "react-spinners";

const MenuDetail = () => {
  const {id} = useParams(); 
  const [menu, setMenu] = useState(null);
  const [ loading, setLoading ] = useState(false);  // 로딩바 설정
  const [ apiError, setApiError ] = useState('');   // 에러설정

  const getMenuDetail = async() => { 
    try {
      setLoading(true);
      let url = `https://my-json-server.typicode.com/umyewon/restaurantWeb-react-router-practice/menu/${id}`
      let response = await fetch(url)
      let data = await response.json();
      setMenu(data);
      setLoading(false);
    } catch (e) {
        console.log(err.message);
        setApiError(err.message);
        setLoading(false);
    }
  }

  useEffect ( () => {
    getMenuDetail();
  }, [])

  return (
    <div className="loadingWrap">
      {loading? <ClipLoader 
        color="#f88c6b"
          loading={loading}   // 로딩 show,hide 조절
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
          /> : !apiError ? 
          (<Container>
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
          </Container>) : <div className="loadingWrap loadingErrorMsg"><h2>잠시 후 다시 시도해 주십시오.</h2></div>
        
      }
    </div>
  )
}

export default MenuDetail