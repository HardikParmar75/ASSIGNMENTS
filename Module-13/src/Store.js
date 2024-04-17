import { configureStore } from "@reduxjs/toolkit";
import Userreducer from "./Userreducer";

export const store = configureStore({
    reducer:{
        users:Userreducer
    }
})