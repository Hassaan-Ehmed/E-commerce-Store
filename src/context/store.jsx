import { createContext, useContext , useEffect, useReducer, useState } from "react";

//store Setup </>
export const ContextStore = createContext(null);

// I made a Custom Hook that return our Setup and full store access
export const useProduct = () => {const store = useContext(ContextStore);
  return store;}
  
  export function  ContextProvider (props) {
    
    
    let [total,setTotal] = useState(0);

    
    
// time of initialization function will invoke and 
// retrieve items from local convert it and assign it to productItems(state varible);

    const [productItems,setProductItems] = useState(getLocalStorage);
 

    // When product is set useEffect run because of dependency and set current 
    // array into Local Storage  
    
    useEffect(()=>{

localStorage.setItem("itemsForCart",JSON.stringify(productItems));

    },[productItems])



    // This function return empty when localStorage is Empty (This time would be First Time When )
 
  function getLocalStorage(){

    let data = JSON.parse(localStorage.getItem("itemsForCart"));
  
      if(data){return data;}
      else{
          return []; }
  
    }
    
    // Search Functionality
    const [searchText,setSearchText] = useState("");



// For quantity

const [quantity,setQuantity] = useState(1);




return (
<ContextStore.Provider


// Sending... Values for Children (APP) to access Easily

// (setSearchText ,searchText) For Search Functionality

// (productItems, setProductItems) For Add to Product on Cart 

// (setTotal, total) For Total Amount Functionaliy (Total Price Calculate of Cart Items)




value={{productItems,setProductItems,total,setTotal,setSearchText,searchText,setQuantity,quantity}}

>{props.children}</ContextStore.Provider>
)
}

