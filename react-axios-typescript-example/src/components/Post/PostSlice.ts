import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostInfo } from "../../models/PostInfo";
import { ALPM } from "../../models/PostModel";
import { RootState } from "../../shared/Redux/store";

const initialState:ALPM = {
    Post:[{
        id: 0,
        writtenText:"",
        profileId:0
    },]
}

const PostModelSlice = createSlice({
    name:"text",
    initialState,
    reducers: {
        setPostModel(state, action) {
            state.Post.push(action.payload)
        },
    }
})


export const {setPostModel} = PostModelSlice.actions;

export default PostModelSlice.reducer;

export const selectPostInfo = (state:RootState) => state.posts;

