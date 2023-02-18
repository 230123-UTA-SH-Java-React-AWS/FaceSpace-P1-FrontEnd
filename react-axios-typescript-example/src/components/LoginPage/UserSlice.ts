import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../shared/Redux/store";
// import { UserProfile } from "../../models/UserProfile";

// const initialState:UserProfile = {
//     id:0,
//     name:"User is not logged in"
// }

// const UserSlice = createSlice({
//     name:"user",
//     initialState,
//     reducers: {
//         setUser: (state, action:PayloadAction<UserProfile>) => {
//             state.id = action.payload.id;
//             state.name = action.payload.name;
//             state.email = action.payload.email;
//             state.firstName = action.payload.firstName;
//             state.lastName = action.payload.lastName;
//             state.img = action.payload.img;
//         },

//         setDefault: (state) => {
//             state.id = 0;
//             state.name = "User is not logged in";
//             state.firstName = "";
//             state.lastName = "";
//             state.img = "";
//         }
//     }
// })

// export const {setUser, setDefault} = UserSlice.actions;

// export default UserSlice.reducer;

// export const selectUser = (state:RootState) => state.user;