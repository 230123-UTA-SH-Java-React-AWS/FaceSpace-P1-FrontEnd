import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../../components/LoginPage/UserSlice";
import PostSlice from "../../components/Post/PostSlice";


export const store = configureStore({
    reducer: {
        user: UserSlice,
<<<<<<< HEAD
        post: PostSlice
=======
        posts: PostSlice,
>>>>>>> db8c58aca212be10adce7b980eababd20003ba4b
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
