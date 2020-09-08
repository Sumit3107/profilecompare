import React, {useState} from "react";
import { Row, Col, Button, Form, Input, Layout,Divider } from "antd";
import {Link } from "react-router-dom"
import { UserOutlined } from "@ant-design/icons";
import "../css/main.css";
import "antd/dist/antd.css";
export const Compare = () => {
  const { Header } = Layout;
  const [username,setusername]=useState("");
  const handleClick=(username)=>{
      alert("Username is "+ username);
  }
  return (
    <div className="App">
      <Layout>
        <Header id="header">
          <h1 id="heading">Git Profile Compare</h1>
        </Header>
      </Layout>
      <Row>
        <Col span={24} id="inputcontainer">
          <Row justify="center">
            <Col span={8}>
              <Form>
                <Input
                  size="large"
                  name="username"
                  placeholder="Github UserName"
                  onChange={(e)=>setusername(e.target.value)}
                  prefix={<UserOutlined 
                  required/>}
                />
                <Divider />
                <Row justify="center">
                  <Form.Item>
                    <Link to={`/home/${username}`}>
                        <Button type="primary" htmlType="submit" onClick={()=>handleClick(username)}>
                            Submit
                        </Button>
                    </Link>
                  </Form.Item>
                </Row>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Compare;
