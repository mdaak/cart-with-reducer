import { createContext, useContext, useReducer } from "react";
import {faker} from '@faker-js/faker';
import {cartReducer} from './Reducer';


const Cart = createContext();
faker.seed(99)
const Context=({ children })=> {
 const  products = [];
 function createRandomUser() {
  return {
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price:faker.commerce.price(),
    image: faker.image.food(),
    inStock: faker.helpers.arrayElement([0,3,5,6,7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1,2,3,4,5])
  };
}
Array.from({ length: 12 }).forEach(() => {
  products.push(createRandomUser());
});

const [state, dispatch] = useReducer(cartReducer, {
  products:products,
  cart:[]
})

  return <Cart.Provider value={{state, dispatch}}>
    {children}
  </Cart.Provider>
}

export default Context;
export const CartState =()=>{
  return useContext(Cart);
}














// import { createContext } from 'react'

// const Card = createContext()

// const Context = ({ children }) => {
//   return <Card.Provider>
//     {children}
//   </Card.Provider>
// }

// export default Context;