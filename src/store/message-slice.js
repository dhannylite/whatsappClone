import { createSlice } from "@reduxjs/toolkit";
import users from "../data/contacts";

const messageSlice = createSlice({
    name: 'message',
    initialState: {users:users, newMessage:false, archivedUsers:[]},
    reducers: {
        addMessage(state, action) {
            // console.log(action.payload.id)
            const user = state.users.find(user => user.id === action.payload.id) || state.archivedUsers.find(user => user.id === action.payload.id)
            user.messages.TODAY.push(action.payload.newMessage)
            state.newMessage = true
        },
        setAsTyping(state, action) {
            const user = state.users.find(user => user.id === action.payload.id) || state.archivedUsers.find(user => user.id === action.payload.id)
            user.typing = action.payload.typing
            state.newMessage = false
        },
        setAsUnread(state, action) {
            const user = state.users.find(user => user.id === action.payload) || state.archivedUsers.find(user => user.id === action.payload)
            user.unread = 0
        },
        fetchResponse(state, action) {
            const user = state.users.find(user => user.id === action.payload.id) || state.archivedUsers.find(user => user.id === action.payload.id)
            user.messages.TODAY.push(action.payload.response)
        },
        setAsRead(state, action) {
            const user = state.users.find(user => user.id === action.payload) || state.archivedUsers.find(user => user.id === action.payload)
            const Dates = Object.keys(user.messages)
            Dates.forEach((date, id) => {
                const messages = user.messages[date]
                messages.forEach(message => {
                    if (!message.sender) {
                        message.status = 'read'
                    }
                })
                
            })
        },
        addToArchive(state, action) {
            console.log('adding', action.payload)
            const user = state.users.find(user => user.id === action.payload)
            state.users = state.users.filter(user => user.id !== action.payload)
            state.archivedUsers.push(user)
            // console.log(state.archivedUsers, 'hiiiiiiiii')
        },
        addToMessage(state, action) {
            console.log(action.payload, 'hellooooo')
            const user = state.archivedUsers.find(user => user.id === action.payload)
            state.archivedUsers = state.archivedUsers.filter(user => user.id !== action.payload)
            state.users.push(user)
        }
        // addArchiveMessage(state, action) {
        //     const user = state.archivedUsers.find(user => user.id === action.payload.id)
        //     user.messages.TODAY.push(action.payload.newMessage)
        //     state.newMessage = true
        // }
    }
})

export const messageState = messageSlice.getInitialState
export const messageAction = messageSlice.actions
export default messageSlice
