import { createContext, useContext, useState } from "react";

//store Setup </>
export const ContextStore = createContext(null);

// I made a Custom Hook that return our Setup and full store access
export const useProduct = () => {const store = useContext(ContextStore);
                                    return store;}

export function  ContextProvider (props) {

    const [productItems,setProductItems] = useState([]);

    let userCheck = false;

return (
<ContextStore.Provider

value={{productItems,setProductItems,userCheck}}

>{props.children}</ContextStore.Provider>
)
}

