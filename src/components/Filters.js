// import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { CartState } from '../context/Context';
import Rating from './Rating';

function Filters() {
  // const [rate, setRate] = useState(3);
  const {productState:{byStock,byFastDelivery, sort, byRating }, productDispatch} = CartState();
  console.log(byStock,byFastDelivery, sort, byRating)
  return (

    <div className='filters'>
      <span className='title'>Filter Products</span>
      <span>
        <Form.Check
          inline
          label='Ascending'
          name='group1'
          type='radio'
          id={'inline-1'}
          onChange={()=>
            productDispatch({
              type:"SORT_BY_PRICE",
              payload:"lowToHigh",
            })
          }
          checked={sort === 'lowToHigh' ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Descending'
          name='radio'
          id={`inline-2`}
          onChange={()=>
          productDispatch({
            type:"SORT_BY_PRICE",
            payload:"highToLow"
          })
          }
          checked={sort === "highToLow" ? true:false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Include out of stock'
          name='group1'
          type='checkbox'
          id={`inline-3`}
          onChange={()=>
          productDispatch({
            type:"FILTER_BY_STOCK"
          })
          }
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='First delivery only'
          name='group-1'
          type='checkbox'
          id={`inline-4`}
          onChange={()=>
            productDispatch({
              type:"FILTER_BY_DELIVERY",
            })
          }
          checked={byFastDelivery}
        />
        <span>
          <label style={{padding:10}}>Rating:</label>
          <Rating rating={byRating}  onClick={(i)=>productDispatch({
            type:"FILTER_BY_RATING",
            payload:i,
          })} style={{cursor:'pointer'}} />
        </span>
      </span>
      <Button varient='light'
      onClick={()=>
      productDispatch({
        type:"CLEAR_FILTERS",
      })
      }
      >Cler Filters</Button>
    </div>
  )
}

export default Filters