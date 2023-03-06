import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comment, CommentArray } from "../../models/Comment";
import { RootState } from "../../shared/Redux/store";

const initialState:CommentArray = {
    Comments:
        [
            {
                id: 0,
                writtenText:"",
                profileId:0,
                postId:0
            }
        ]

}

const CommentSlice = createSlice({
    name:"text",
    initialState,
    reducers: {
        setComment(state, action:PayloadAction<Comment[]>) {
            state.Comments = [...action.payload];
        },
        
        addComment:(state, action: PayloadAction<Comment>) =>{
            state.Comments = [...state.Comments, action.payload];
        }
    }
})


export const {setComment, addComment} = CommentSlice.actions;

export default CommentSlice.reducer;

export const selectComment = (state:RootState) => state.comments;

