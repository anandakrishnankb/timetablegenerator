import React from "react";
import { Button, Typography } from "antd";

const { Title, Link } = Typography;
const nav = () => {
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <Title style={{ margin: "0px",
    fontWeight:"bold" }} level={2}>
          ClockWise
        </Title>
      </div>
      <div className="nav-links">
        <Link style={{fontSize:"20px",
    fontWeight:"500",color:"black",marginRight:"15px"}} href="https://ant.design" target="_blank">
          Home
        </Link>{" "}
        <Link style={{fontSize:"20px",
    fontWeight:"500",color:"black",marginRight:"15px"}} href="https://ant.design" target="_blank">
          Generate
        </Link>{" "}
        <Link style={{fontSize:"20px",
    fontWeight:"500",color:"black",marginRight:"15px"}} href="https://ant.design" target="_blank">
          About
        </Link>
        <Button style={{ fontSize: "20px", height: "50px" }}>Login</Button>
      </div>
    </div>
  );
};

export default nav;
