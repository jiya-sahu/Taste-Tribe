import {configureStore} from "@reduxjs/toolkit"
import Cartslice from "./slices/Cartslice";
const Store = configureStore({
    reducer:{
        cart : Cartslice,
    }
});
export default Store;