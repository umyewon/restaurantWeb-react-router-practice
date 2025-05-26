import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'

const Order = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Form.Check // prettier-ignore
              type={'radio'}
              id={`default-${'radio'}`}
              label={'전체 선택'}
            />
          </Form>
        </Col>
        <Col>
            <button className="redBtn" type="submit">  
              선택 삭제
            </button>
        </Col>
        </Row>
        
        <Row>
        <Col>
          <Form>
            <br/>
            {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check // prettier-ignore
                  type={type}
                  id={`default-${type}`}
                  label={`default ${type}`}
                />

                {/* <Form.Check
                  disabled
                  type={type}
                  label={`disabled ${type}`}
                  id={`disabled-default-${type}`}
                /> */}
              </div>
            ))}
          </Form>
        </Col>

      </Row>
    </Container>
  )
}

export default Order