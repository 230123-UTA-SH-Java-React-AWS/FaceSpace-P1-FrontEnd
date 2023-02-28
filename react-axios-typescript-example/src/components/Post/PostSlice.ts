import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostModel, PostModelArray } from "../../models/PostModel";
import { RootState } from "../../shared/Redux/store";

const initialState:PostModelArray = {
    Post:
        [
            {
            id: 0,
            writtenText:"",
            profileId:0
        }
    ]
}


const PostModelSlice = createSlice({
    name:"text",
    initialState,
    reducers: {
        setPost (state, action:PayloadAction<PostModel[]>)  {
            // state.Post[0].id = action.payload.id;
            // state.Post[0].writtenText = action.payload.writtenText;
            // state.Post[0].profileId = action.payload.profileId;
            // state.Post.push(action.payload);
            state.Post = [...action.payload];
        },
        addPost:(state,action:PayloadAction<PostModel>) =>{
            console.log(action);
            
            // state.Post.push(action.payload)
            state.Post = [...state.Post, action.payload];
            console.log(state);            
        }
    }
})




export const {setPost, addPost} = PostModelSlice.actions;



export default PostModelSlice.reducer;


export const selectPostInfo = (state:RootState) => state.posts;

