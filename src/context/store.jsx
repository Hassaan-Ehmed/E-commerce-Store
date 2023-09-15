import { createContext, useContext , useEffect, useReducer, useState } from "react";

//store Setup </>
export const ContextStore = createContext(null);

// I made a Custom Hook that return our Setup and full store access
export const useProduct = () => {const store = useContext(ContextStore);
  return store;}
  
  export function  ContextProvider (props) {
    
    
    let [total,setTotal] = useState(0);

    const [state,dispatch] = useReducer(reducer,0);

    function reducer(state,action){
    
      switch(action.type){
    
        case "Add":
        return state += action.amount ;
        break;
    
        case "Sub":
        return state-=action.amount
    
    
      }
    }
    
// time of initialization function will invoke and 
// retrieve items from local convert it and assign it to productItems(state varible);

    const [productItems,setProductItems] = useState(getLocalStorage);
 

    // When product is set useEffect run because of dependency and set current 
    // array into Local Storage  
    
    useEffect(()=>{

localStorage.setItem("itemsForCart",JSON.stringify(productItems));

    },[productItems])

     
  function getLocalStorage(){

    let data = JSON.parse(localStorage.getItem("itemsForCart"));
  
      if(data){return data;}
      else{
          return []; }
  
    }
    


    

return (
<ContextStore.Provider

value={{productItems,setProductItems,dispatch,state,total,setTotal}}

>{props.children}</ContextStore.Provider>
)
}

