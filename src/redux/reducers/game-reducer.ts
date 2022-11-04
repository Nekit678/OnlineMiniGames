import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
    game: string | null
    modeAI: boolean | null
}

let initialState: initialStateType = {
    game: null,
    modeAI: null
}

const userSlice = createSlice(
    {
        name: "user",
        initialState: initialState,
        reducers: {
            setGame(state, action) {
                state.game = action.payload
            },
            setModeAI(state, action) {
                state.modeAI = action.payload
            },
            resetSelectGameOptions(state){
                state.game = null
                state.modeAI = null
            }
        }
    }
)

export const { setGame, setModeAI, resetSelectGameOptions} = userSlice.actions
export default userSlice.reducer