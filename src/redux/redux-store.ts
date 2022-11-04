import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reducers/game-reducer";
import userReducer from "./reducers/user-reducer";



let store = configureStore(
    {
        reducer: {
            userInfo: userReducer,
            gameInfo: gameReducer
        }
    }
)

export type RootState = ReturnType<typeof store.getState>

export default store;