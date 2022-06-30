import { createSlice } from "@reduxjs/toolkit";
import users from "../data/contacts";
// import { messageState } from "./message-slice";

// const users = messageState

const archiveSlice = createSlice({
    name: 'archive',
    initialState: { contacts: [], total: 0, showArchive: false, archived:false },
    reducers: {
        viewArchive(state) {
            state.showArchive = true
        },
        closeArchive(state) {
            state.showArchive = false
        },
        addToArchive(state, action) {
            // const user = users.find(user => user.id === action.payload)
            // state.contacts.push(user)
            state.total += 1
            state.archived = false
        },
        setArchived(state) {
            state.archived = true
        }
    }
})

export const archiveActions = archiveSlice.actions
export default archiveSlice