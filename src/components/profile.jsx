import React,{useState,useEffect} from "react";
import { Card,Col,Row} from "antd";
import "antd/dist/antd.css";
import "../css/main.css";
export const profile = (props) => {
  if (props.userErrMess) {
    return <h4>{props.userErrMess} Refresh the Website</h4>;
  } else if (props.user.user.length>0) {
    return (
      <div id="profileback">
        <Row justify="center"><h1 style={{color:"white" }}>Ranked according Followers</h1></Row>
        <Row justify="center"><p style={{color:"white" ,marginBottom:"5%"}}>More no. of followers results in top rank.</p></Row>
        <Row justify="center">
        {props.user.user.map((user) => {
          return (
              <Col span={8}>
              <Card hoverable title="Profile Info" bordered={false} style={{ width: 300,marginBottom:'5%' }} id="Cards">
                <h4><strong>Username: </strong>{user.login}</h4>
                <p><strong>Followers: </strong>{user.followers}</p>
                <p><strong>Following: </strong>{user.following}</p>
                <p><strong>Public Repos: </strong>{user.public_repos}</p>
                <p><strong>Public Gists: </strong>{user.public_gists}</p>
              </Card>
              </Col>
          );
        })}
        </Row>
      </div>
    );
  } else return <div></div>;
};

export default profile;
