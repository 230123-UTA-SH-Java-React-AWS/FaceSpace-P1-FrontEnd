import React, { ReactNode, useContext, useState } from "react";
import axios from 'axios';
import { UserInfo } from "../../models/UserInfo";
import { Button, Col, Row } from "react-bootstrap";

export default function UserView (props: UserInfo) {

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
                    <Button type="button" value="Input" variant="primary">Follow</Button>
                </Row>
            </Col>
        </div>
    </div>
}