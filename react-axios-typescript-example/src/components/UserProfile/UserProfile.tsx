import React, { useState } from "react";
import axios from 'axios';
import { UserInfo } from "../../models/UserInfo";
import { useAppSelector } from "../../shared/Redux/hook";
import { selectUser } from "../LoginPage/UserSlice";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./UserProfile.css"
import { Stack } from "react-bootstrap";
import Post from "../Post/Post";
import { userInfo } from "os";
import CreatePost from "../CreatePost/CreatePost";
import { PostInfo } from "../../models/PostInfo";
import { selectPostInfo } from "../Post/PostSlice";

export default function UserProfile(){

  const currentUser = useAppSelector(selectUser);
  const [listOfPost, setListOfPost] = useState<PostInfo[]>([]);
 // const listOfPost = useAppSelector(selectPostInfo);

  axios.get<UserInfo>(`http://localhost:8080/api/users/${currentUser.id}`).then(response => {console.log(response.data);})
  axios.get<PostInfo>(`http://localhost:8080/api/posts/${currentUser.id}`).then(response => {console.log(response.data);
      setListOfPost([response.data,...listOfPost])
  })

  return <div>

    <div className="userIntro">
      <Container>
        <Row>
          <Col>
            <img className="img" src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt=""/>
          </Col>
          <Col>
            <h3>FirstName: {currentUser.surname} </h3>
            <h3>LastName: {currentUser.givenName}</h3>
            <h3>Email: {currentUser.emailAddress}</h3>
          </Col>
        </Row>

        <Row>
          <Col xs={6}></Col>
          <Col>
            <Stack gap={3}>
              <p>Posts</p>
              <p>123</p>
            </Stack>
          </Col>
          <Col>
            <Stack gap={3}>
              <p>Followers</p>
              <p>345</p>
            </Stack>
          </Col>
          <Col>
            <Stack gap={3}>
              <p>Following</p>
              <p>450</p>
            </Stack>
          </Col>
        </Row>

      </Container>
    </div>

    <div className="box grid">
      {
        listOfPost.map(posts => {
          return <Post {...Post} key={posts.writtenText}/>
        })
      }
    </div>
    <div className="box grid">
      <CreatePost />
    </div>
    
    </div>
    
  }
  