import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../shared/Redux/store";
import { User } from "../../models/User";

const initialState:User = {

    id:0,
    emailAddress:"User is not logged in",
    password:"",
    givenName:"",
    surname:"",
}

const UserSlice = createSlice({
    name:"user",
    initialState,
    reducers: {

        setUser: (state, action:PayloadAction<User>) => {

            state.id = action.payload.id;
            state.emailAddress = action.payload.emailAddress;
            state.password = action.payload.password;
            state.givenName = action.payload.givenName;
            state.surname = action.payload.surname;
        },

        setDefault: (state) => {
            state.id = 0;
            state.emailAddress = "User is not logged in";
            state.givenName = "";
            state.surname = "";
        }
    }
})

export const {setUser, setDefault} = UserSlice.actions;

export default UserSlice.reducer;

export const selectUser = (state:RootState) => state.user;