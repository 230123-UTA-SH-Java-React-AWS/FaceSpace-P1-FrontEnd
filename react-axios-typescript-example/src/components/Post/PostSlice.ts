import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../shared/Redux/store";

const initialState:any = {
    Post:{
    }
}

const PostModelSlice = createSlice({
    name:"text",
    initialState,
    reducers: {
        setPostModel(state, action) {
            state.Post = action.payload;
        },
    setDefault: (state) =>{
        state.Post ={};
    }
    }
})


export const {setPostModel} = PostModelSlice.actions;

export default PostModelSlice.reducer;

export const selectPostInfo = (state:RootState) => state.posts;

