import { createContext, useContext, useEffect, useReducer, useState } from "react";

//store Setup </>
export const ContextStore = createContext(null);

// I made a Custom Hook that return our Setup and full store access
export const useProduct = () => {const store = useContext(ContextStore);
                                    return store;}

export function  ContextProvider (props) {
    let userCheck = false;

    const [productItems,setProductItems] = useState([]);
    const [itemForCart,setItemForCart] = useState([]);



useEffect(()=>{
        
    localStorage.setItem("productItems",JSON.stringify(productItems));

    let getData = localStorage.getItem("productItems");

   let convertedData_to_Object = JSON.parse(getData);

   setItemForCart(convertedData_to_Object);


},[productItems]);




return (
<ContextStore.Provider

value={{productItems,setProductItems,userCheck,itemForCart}}

>{props.children}</ContextStore.Provider>
)
}

