import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../shared/Redux/store";

const initialState:any = {
    Comment:{
    }
}

const CommentSlice = createSlice({
    name:"text",
    initialState,
    reducers: {
        setComment(state, action) {
            state.Comment = action.payload;
        },
    setDefault: (state) =>{
        state.Comment ={};
    }
    }
})


export const {setComment} = CommentSlice.actions;

export default CommentSlice.reducer;

export const selectComment = (state:RootState) => state.comments;

