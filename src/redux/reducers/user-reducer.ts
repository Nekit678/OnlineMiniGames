import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
    nickname:string | null
}

let initialState:initialStateType =  {
    nickname:null
}

const userSlice = createSlice(
    {
        name: "user",
        initialState: initialState,
        reducers:{
            setNickname(state,action){
                state.nickname = action.payload
            }
        }
    }
)

export const {setNickname} = userSlice.actions
export default userSlice.reducer