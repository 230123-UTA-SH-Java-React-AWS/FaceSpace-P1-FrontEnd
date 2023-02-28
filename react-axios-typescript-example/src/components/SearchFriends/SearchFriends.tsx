import React, { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { UserInfo } from "../../models/UserInfo";
import { userInfo } from "os";
import UserProfile from "../UserProfile/UserProfile";
import UserView from "../UserView/UserView";


export default function SearchFriends() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [listOfPeople, setListOfPeople] = useState<UserInfo[]>([]);

    const handleSearch = () => {
        const SearchUser = {
            givenName: firstName,
            surname: lastName,
        }
        axios.post<UserInfo[]>(`http://localhost:8080/api/search_friends`, SearchUser).then(response => {console.log(response.data);
            setListOfPeople(response.data);
            console.log(listOfPeople);
        })
    }

    const handleInputFName= (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setFirstName(event.target.value);
    }
    const handleInputLName = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setLastName(event.target.value);
    }

    return <div>
        <Container>
            <div>
                <InputGroup className="mb-3">
                    <Form.Control placeholder="First Name" aria-label="Search Name"
                        aria-describedby="basic-addon2" value={firstName} onChange={handleInputFName}/>
                    <Form.Control placeholder="Last Name" aria-label="Search Name"
                        aria-describedby="basic-addon2" value={lastName} onChange={handleInputLName}/>
                    <Button variant="outline-secondary" id="button-addon2" onClick={handleSearch}>
                        Search
                    </Button>
                </InputGroup>
            </div>
            <div className="box grid">
                {/* {
                    listOfPeople.map((user, index) => {
                        return <UserView {...user} key={index} firstName={user.firstName}/>
                    })
                } */}

            {/* {JSON.stringify(listOfPeople)} */}

            {/* {
                listOfPeople.map((user, index) => {
                    return(
                        <div key={index}>
                            <p>firstName={user.givenName}</p>
                        </div>
                    )
                })
            } */}

                
            </div>
        </Container>
    </div>
}