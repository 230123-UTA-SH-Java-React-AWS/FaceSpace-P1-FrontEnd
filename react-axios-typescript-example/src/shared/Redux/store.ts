import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../../components/LoginPage/UserSlice";
import PostSlice from "../../components/Post/PostSlice";
import CommentSlice from "../../components/Comment/CommentSlice";


export const store = configureStore({
    reducer: {
        user: UserSlice,
        posts: PostSlice,
        comments: CommentSlice

    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
