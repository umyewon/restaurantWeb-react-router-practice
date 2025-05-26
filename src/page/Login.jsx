import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {Form, Button, Container} from 'react-bootstrap';

const Login = ({setAuthenticate}) => {
  const [ idVal, setIdVal ] = useState('');
  const [ pwVal, setPwVal ] = useState('');
  const [ err, setErr ] = useState(false);

  /* 로그인 로직 */
  const navigate = useNavigate();
  const loginUser = (event) => {
    /* onSubmit에서 제공하는 기본 함수 (submit시 페이지 리로드 제거) */
    event.preventDefault();  

    if(idVal && pwVal != '' ){
      setErr(false);
      setAuthenticate(true);
      navigate('/');
    } else {
      setAuthenticate(false);
      setErr(true);
    }
  }

  return (
    <Container className="loginContainer">
      <Form onSubmit = { (event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일</Form.Label>
          <Form.Control type="email" placeholder="이메일을 입력해주세요. 예)sampel@.com " onChange={(e) => {setIdVal(e.target.value)}} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 입력해주세요." onChange={(e) => {setPwVal(e.target.value)}} />
        </Form.Group>

        <div className="login-btn"> 
          {err &&  <Form.Text className="text-muted" style={{'fontColor' : 'red'}}>
            이메일과 비밀번호를 확인해주세요.
          </Form.Text> }
          {/* 
            form태그 내부의 button 타입이 submit일 땐 onClick으로 이벤트를 주면 안 됨
            onSubmit 사용해야함
          */}
          <button className="redBtn" type="submit">  
            로그인
          </button>
        </div>
      </Form>
    </Container>
  )
}

export default Login