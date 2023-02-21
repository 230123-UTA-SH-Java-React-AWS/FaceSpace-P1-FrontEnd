import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../shared/Redux/store";
import { UProfile } from "../../models/UserProfile";

const initialState:UProfile = {
    id:0,
    email:"User is not logged in",
    password:"",
    firstName:"",
    lastName:"",
}

const UserSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        setUser: (state, action:PayloadAction<UProfile>) => {
            state.id = action.payload.id;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.img = action.payload.img;
        },

        setDefault: (state) => {
            state.id = 0;
            state.email = "User is not logged in";
            state.firstName = "";
            state.lastName = "";
            state.img = "";
        }
    }
})

export const {setUser, setDefault} = UserSlice.actions;

export default UserSlice.reducer;

export const selectUser = (state:RootState) => state.user;
