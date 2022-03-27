import React from "react";
import { AppStore } from "./AppStore";

export const Store = {
    app: AppStore
};

export const StoreContext = React.createContext(Store);

export const useStore = () => {
    return React.useContext(StoreContext);
};



