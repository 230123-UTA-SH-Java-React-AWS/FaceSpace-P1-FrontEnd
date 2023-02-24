import { createSlice, PayloadAction } from "@reduxjs/toolkit";
<<<<<<< HEAD
import { PostModel } from "../../models/PostModel";
import { RootState } from "../../shared/Redux/store";


const initialState:PostModel = {

    id: 0,
    writtenText: " ",
    profileId: 0
}

const PostSlice = createSlice({
    name:"post",
    initialState,
    reducers: {

        setUser: (state, action:PayloadAction<PostModel>) => {

            state.id = action.payload.id;
            state.writtenText = action.payload.writtenText;
            state.profileId = action.payload.profileId;
            
=======
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
>>>>>>> db8c58aca212be10adce7b980eababd20003ba4b
        },

        setDefault: (state) => {
            state.id = 0;
<<<<<<< HEAD
            state.writtenText = "";
=======
            state.writtenText = "No Text";
>>>>>>> db8c58aca212be10adce7b980eababd20003ba4b
            state.profileId = 0;
        }
    }
})

<<<<<<< HEAD
export const {setUser, setDefault} = PostSlice.actions;

export default PostSlice.reducer;

export const selectUser = (state:RootState) => state.post;
=======
export const {setPostInfo, setDefault} = PostInfoSlice.actions;

export default PostInfoSlice.reducer;

export const selectPostInfo = (state:RootState) => state.posts;
>>>>>>> db8c58aca212be10adce7b980eababd20003ba4b
