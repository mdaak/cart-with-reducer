import React from 'react'
import { CartState } from '../context/Context';
import Filters from './Filters';
import SingleProduct from './SingleProduct';
import './styles.css';


function Home() {
  const {state:{products}} = CartState();
  console.log(products)
  return (
    <div className='home'>
      <Filters/>
      <div className='productsContainer' >
        {
          products.map((prod, i)=>{
            return <SingleProduct key={i}  prod={prod}/>
           
          })
        }
      </div>
      
    </div>
  )
}

export default Home;