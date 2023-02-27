import React, { ReactNode, useContext, useState } from "react";
import axios from 'axios';
import { UserInfo } from "../../models/UserInfo";
import textTheme from "../SearchFriends/SearchFriends";

interface FoundUser extends UserInfo {
    counter?:number,
}

export default function UserView (props: FoundUser) {

    return <div>
        {/* <img className="img" src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt=""/> */}
        <h4> name: {props.firstName}</h4>
        <h4>family: {props.lastName}</h4>
        <p>email: {props.email}</p>
    </div>
}