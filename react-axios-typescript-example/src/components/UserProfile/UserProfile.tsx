import React, { useState } from "react";
import axios from 'axios';
import { UserProfile } from "../../models/UserProfile";
import { useAppSelector } from "../../shared/Redux/hook";
import { selectUser } from "../LoginPage/UserSlice";

export default function UserProfile(){

  const currentUser = useAppSelector(selectUser);
  const [user, setUser] = useState();

 // axios.get<UserProfile>(`http://localhost:8080/api/users/{id}`, ${id}).then(response => {console.log(response.data);})
  
  return <div>
    
    </div>
    
  }
  
  