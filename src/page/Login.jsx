import { useNavigate } from 'react-router-dom';
import {Form, Button, Container} from 'react-bootstrap';

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();  // onSubmit에서 제공하는 기본 함수 (submit시 페이지 리로드 제거)
    console.log("loginUser Function issue!!")
    setAuthenticate(true);
    navigate('/');
  }

  return (
    <Container>
      <Form onSubmit = { (event) => loginUser(event)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일</Form.Label>
          <Form.Control type="email" placeholder="이메일을 입력하세요." />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 입력하세요." />
        </Form.Group>

        <div className="login-btn"> 
          {/* 
            form태그 내부의 button 타입이 submit일 땐 onClick으로 이벤트를 주면 안 됨
            onSubmit 사용해야함
          */}
          <button type="submit">  
            로그인
          </button>
        </div>
      </Form>
    </Container>
  )
}

export default Login