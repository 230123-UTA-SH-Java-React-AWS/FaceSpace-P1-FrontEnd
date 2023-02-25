import React, { useState } from "react";
import axios from 'axios';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function SearchFriends() {
    return <div>
        <Container>
            <div>
                <InputGroup className="mb-3">
                    <Form.Control
                        placeholder="Search Name"
                        aria-label="Search Name"
                        aria-describedby="basic-addon2"/>
                        <Button variant="outline-secondary" id="button-addon2">
                            Search
                        </Button>
                </InputGroup>
            </div>
        </Container>
    </div>
}