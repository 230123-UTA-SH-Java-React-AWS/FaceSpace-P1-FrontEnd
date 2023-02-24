import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
            
        },

        setDefault: (state) => {
            state.id = 0;
            state.writtenText = "";
            state.profileId = 0;
        }
    }
})

export const {setUser, setDefault} = PostSlice.actions;

export default PostSlice.reducer;

export const selectUser = (state:RootState) => state.post;