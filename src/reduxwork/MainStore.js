import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "./UserSlice";



export const MainStore = configureStore ({
    reducer : {
        user:useReducer,
    },
});

export default MainStore;