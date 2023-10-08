import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import { Contactanos } from "../../types/contactanos"


interface contactState {
   succesState:string
   failState:string
}

const initialAppState: contactState = {
    succesState:"",
    failState:""
}

const contactSlice = createSlice({
    name: "contactState",
    initialState: initialAppState,
    reducers: {
        START_POST_CONTACT(state, action: PayloadAction<Contactanos>) {
            state
            action
        },
        SUCCES_POST_CONTACT(state, action: PayloadAction<string>) {
            state.succesState = action.payload
        },
        FAIL_POST_CONTACT(state, action: PayloadAction<string>) {
            state.failState = action.payload
        },
        RESET_POST_CONTACT(state, action: PayloadAction<string>) {
            state.failState = ""
            state.succesState=""
            action
        },

    }
})
export const { START_POST_CONTACT,RESET_POST_CONTACT,SUCCES_POST_CONTACT,FAIL_POST_CONTACT } = contactSlice.actions
export default contactSlice.reducer