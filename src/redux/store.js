import {configureStore} from "@reduxjs/toolkit"
import Cartslice from "./slices/Cartslice";
import Categoryslice from "./slices/Categoryslice";
const Store = configureStore({
    reducer:{
        cart : Cartslice,
        category:Categoryslice
    }
});
export default Store;