import React, { ReactNode, useContext, useState } from "react";
import axios from 'axios';
import { UserInfo } from "../../models/UserInfo";
import { useAppDispatch, useAppSelector } from "../../shared/Redux/hook";
import { selectUser } from "../LoginPage/UserSlice";
import { Button, Col, Row } from "react-bootstrap";

export default function UserView (props: UserInfo) {
    const currentUser = useAppSelector(selectUser); 
    const handleFollow = () => {
        console.log(currentUser.id);
        const Following = {
            follower: 1,
            following: props.id
        }
        axios.post(`http://localhost:8080/api/followings`, Following).then(response => {console.log(response.data);

        })

    }

    return <div>
        <div>
            <Col>
                <img className="img" src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt=""/>
            </Col>
            <Col>
                <Row>
                    <h5>{props.givenName} {props.surname}</h5>
                </Row>
                <Row>
                    <p>{props.emailAddress}</p>
                </Row>
            </Col>
            <Col>
                <Row>
                    <Button type="button" value="Input" variant="primary" onClick={handleFollow}>Follow</Button>
                </Row>
            </Col>
        </div>
    </div>
}