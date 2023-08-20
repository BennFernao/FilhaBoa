import { configureStore } from "@reduxjs/toolkit";
import fatiaDeSessoes from "./reducer"


export default configureStore({
    reducer:{
        sessoes: fatiaDeSessoes

    }
})