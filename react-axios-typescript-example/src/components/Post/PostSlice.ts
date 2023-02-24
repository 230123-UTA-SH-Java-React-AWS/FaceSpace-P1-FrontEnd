import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostInfo } from "../../models/PostInfo";
import { RootState } from "../../shared/Redux/store";

const initialState:PostInfo = {
    id:0,
    writtenText:"",
    profileId:0,
}

const PostInfoSlice = createSlice({
    name:"text",
    initialState,
    reducers: {
        setPostInfo: (state, action:PayloadAction<PostInfo>) => {
            state.id = action.payload.id;
            state.writtenText = action.payload.writtenText;
            state.profileId = action.payload.profileId;
        },

        setDefault: (state) => {
            state.id = 0;
            state.writtenText = "No Text";
            state.profileId = 0;
        }
    }
})

export const {setPostInfo, setDefault} = PostInfoSlice.actions;

export default PostInfoSlice.reducer;

export const selectPostInfo = (state:RootState) => state.posts;