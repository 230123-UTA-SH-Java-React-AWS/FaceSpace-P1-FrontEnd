import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../../components/LoginPage/UserSlice";
import PostSlice from "../../components/Post/PostSlice";


export const store = configureStore({
    reducer: {
        user: UserSlice,
        posts: PostSlice,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
