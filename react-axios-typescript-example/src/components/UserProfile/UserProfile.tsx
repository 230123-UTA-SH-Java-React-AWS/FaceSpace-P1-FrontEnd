import React, { useState } from "react";
import axios from 'axios';
import { UserInfo } from "../../models/UserInfo";
import { useAppDispatch, useAppSelector } from "../../shared/Redux/hook";
import { selectUser } from "../LoginPage/UserSlice";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./UserProfile.css"
import { Stack } from "react-bootstrap";
import Post from "../Post/Post";
import { userInfo } from "os";
import CreatePost from "../CreatePost/CreatePost";
import { selectPost, setPost } from "../Post/PostSlice";
import { PostModel } from "../../models/PostModel";

export default function UserProfile() {

  const currentUser = useAppSelector(selectUser);
  const [listOfPost, setListOfPost] = useState<PostModel[]>([]);
//  const listOfPost = useAppSelector(selectPostInfo);
//------------------
//  const postsss = useAppSelector(selectPostInfo);
//  const dispatch = useAppDispatch();

  axios.get<UserInfo>(`http://localhost:8080/api/users/${currentUser.id}`).then(response => {console.log(response.data);})
  axios.get<PostModel>(`http://localhost:8080/api/posts/${currentUser.id}`).then(response => {console.log(response.data);
      setListOfPost([response.data,...listOfPost])
  })
 // axios.get<PostInfo>(`http://localhost:8080/api/posts/${currentUser.id}`).then(response => {console.log(response.data); })
 
//  axios.get<PostModel>(`http://localhost:8080/api/posts/${currentUser.id}`).then(response => {
//     dispatch(setPostModel(response.data));
//   })

  return <div className="page">

    <div className="userIntro">
      <Container>
        <Row>
          <Col>
            <img className="img" src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt=""/>
          </Col>
          <Col>
            <h3>{currentUser.givenName} {currentUser.surname}</h3>
            <h6>Email: {currentUser.emailAddress}</h6>
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
              <p>Friends</p>
              <p>345</p>
            </Stack>
          </Col>
        </Row>

      </Container>
    </div>

    <div className="box grid">    

    {/* // Waiting for Post.ts to be completed to show posts here ... */}

      {
        // listOfPost.map(posts => {
        //   return <Post {...posts} id={posts.id} />
        // })
      }

                {/* {
                    postsss.map(posts => {
                        return <Post {...posts} key={posts.id}/>
                    })
                } */}

      {/* {
        listOfPost.map(posts => {
          return <Post {...posts} key={posts.writtenText}/>})
      } */}

      {
          listOfPost.map((p, index) => {
                    return(
                        <div key={index}>
                            <p>{p.writtenText}</p>
                        </div>
                    )
                })
        }
      
    </div>
    <div className="box grid">
      <CreatePost />
    </div>
    
    </div>
    
  }
  