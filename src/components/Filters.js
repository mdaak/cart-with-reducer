import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Rating from './Rating';

function Filters() {
  const [rate, setRate] = useState(3);
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
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Descending'
          name='radio'
          id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='Include out of stock'
          name='group1'
          type='checkbox'
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          label='First delivery only'
          name='group-1'
          type='checkbox'
          id={`inline-4`}
        />
        <span>
          <label style={{padding:10}}>Rating:</label>
          <Rating rating={rate}  onClick={(i)=>setRate(i)} style={{cursor:'pointer'}} />
        </span>
      </span>
      <Button varient='light'>Cler Filters</Button>
    </div>
  )
}

export default Filters