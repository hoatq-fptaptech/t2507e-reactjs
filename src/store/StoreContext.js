import React from "react";

export const initState = {
    cart:[]
}
const StoreContext = React.createContext();
export const StoreProvider = StoreContext.Provider;
export default StoreContext;