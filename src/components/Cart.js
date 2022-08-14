import React, { useEffect, useState } from 'react'
import { ListGroup, Button, Row, Col, Image, Form } from 'react-bootstrap';
import { CartState } from '../context/Context';
import Rating from './Rating';

function Cart() {
  const {state:{cart}, dispatch}  = CartState();
  const[total, setTotal] = useState();
  useEffect(()=>{
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)*curr.qty, 0 ))
  },[cart]);
  console.log(cart)
  return (
    <div className='home'>

      <div className='productContainer'>
        <ListGroup>
      {
        cart.map((prod, i)=>(
          <ListGroup.Item key={i}>
                      <Row >
                        <Col md={2}>
                          <Image src={prod.image} alt='' fluid rounded/>
                        </Col>
                        <Col md={2}>
                          <span>
                            {prod.name}
                          </span>
                        </Col>
                        <Col md={2}>{prod.price}</Col>
                        <Col md={2}>
                          <Rating rating={prod.rating}/>
                        </Col>
                        <Col md={2}>
                          <Form.Control as='select' value={prod.qty}>
                            {[...Array(prod.inStock).keys()].map((x)=>(<option key={x+1}>
                              {x+1}
                            </option>))}
                          </Form.Control>
                        </Col>
                      </Row>
          </ListGroup.Item>
        ))
      }
        </ListGroup>
      </div>
      <div className='filters summary'>
        <span className='title'> Subtotal ({cart.length}) items</span>
        <span style={{fontWeight:700, fontSize:20}}>Total: {total}</span>
        <Button type='button' disabled={cart.length === 0}>
          Proced to checkout
        </Button>
      </div>
    </div>
  )
}

export default Cart;