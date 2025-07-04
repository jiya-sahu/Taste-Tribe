import {configureStore} from "@reduxjs/toolkit"
import Cartslice from "./slices/Cartslice";
import Categoryslice from "./slices/Categoryslice";
import Searchslice from "./slices/Searchslice";
const Store = configureStore({
    reducer:{
        cart : Cartslice,
        category:Categoryslice,
        search:Searchslice
    }
});
export default Store;