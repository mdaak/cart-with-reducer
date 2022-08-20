import React from 'react'
import { Navbar, Container, FormControl,Nav, Badge, Dropdown, Button } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai';
import {FaShoppingCart} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import './styles.css';

function Hader() {
    const {
        state:{cart},
        dispatch,
        productDispatch
    } = CartState();
  return (
    <Navbar bg='dark' variant='dark' style={{height :80}}>
        <Container >
            <Navbar.Brand>
                <a href='/'>shiping cart</a>
            </Navbar.Brand>
            <Navbar.Text 
                className='search'
                >
                <FormControl
                style={{width : 500}}
                placeholder='search a product...'
                className='m-auto'
                // aria-label='Search'
                onChange={(e)=>{
                    console.log(e.target.value)
                    productDispatch({
                        type:"FILTER_BY_SEARCH",
                        payload:e.target.value,
                    })
                }}
                />
            </Navbar.Text>
            <Nav >
                <Dropdown >
                    <Dropdown.Toggle variant = 'success'>
                        <FaShoppingCart color='white' fontSize='25px'/>
                        <Badge>{cart.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{minWidth:370}}>
                        {cart.length > 0 ?(
                            <>
                            {cart.map((prod)=>(
                                <span className='cartitem' key={prod.id}>
                                    <img 
                                    className='cartItemImg'
                                    src={prod.image}
                                    alt={prod.name}
                                    />
                                    <div className='cartItemDetail'>
                                        <span>{prod.name}</span>
                                        <span>
                                            {prod.price.split(".")[0]}
                                        </span>
                                    </div>
                                    <AiFillDelete
                                    fontSize='20px'
                                    style={{cursor:'pointer'}}
                                    onClick={()=>dispatch({
                                        type:"REMOVE_FROM_CART",
                                        payload:prod,
                                    })}
                                    />
                                </span>
                            ))}
                            </>
                        ):(
                             <span style={{padding:10}}> cart is ampty</span>
                        )}
                        <Link to='/cart'>
                            <Button style={{width:'95%',
                            margin:'0 10px'
                        }}>
                                Go to Cart
                            </Button>
                        </Link>
                       
                    </Dropdown.Menu>

                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Hader