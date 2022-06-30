import { configureStore } from "@reduxjs/toolkit";
import archiveSlice from "./archive-slice";
import messageSlice from "./message-slice";

const store = configureStore({
    reducer: {message: messageSlice.reducer, archive:archiveSlice.reducer}
})

export default store