import { createStore } from "solid-js/store";
import { createContext, useContext } from "solid-js";

// Context is used to share state across multiple components 
export const CartContext = createContext();

export function CartContextProvider(props){
    const [items, setItems] = createStore([
        { title: "test product", quantity: 2, id: 100, price: 15},
        { title: "test prod2", quantity: 4, id: 101, price: 25},
        { title: "test prod3", quantity: 6, id: 102, price: 35},
    ]);

    // value takes only a single value hence in-order to return multiple 
    // values they must be wrapped inside an object
    return(
        <CartContext.Provider value={{items, setItems}}>
            {props.children}
        </CartContext.Provider>
    )
}

export function useCartContext(){
    return useContext(CartContext);
}
