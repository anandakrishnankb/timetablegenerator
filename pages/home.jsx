import React from "react";
import { Button, Typography } from "antd";
import Bg from "../src/assets/bg2.jpg";
import Nav from '../components/nav'


const { Text, Link } = Typography;
const { Title } = Typography;
const home = () => {
  return (
    <div>
        <Nav/> 
      
      <div className="content-bg-wrap">
        <div className="bg-container">
          <img src={Bg} alt="" />
        </div>
        <div className="content-container">
          <Title level={1} style={{ fontSize: "58px", fontWeight: "bold" }}>
            What is ClockWise?
          </Title>
          <p className="para">
            ClockWise - Our user-friendly platform automates timetable creation,
            considering faculty preferences, room availability, and student
            groups. Experience optimized resource utilization, increased time
            efficiency, and improved user satisfaction with our cutting-edge
            Timetable Generator—reshaping the future of academic scheduling.
          </p>
          <div className="btn-wrapper">
            <Button
              type="primary"
              style={{
                backgroundColor: "white",
                color: "black",
                fontSize: "22px",
                height: "50px",
                border:"1px solid black"
              }}
            >
              Read More
            </Button>

            <Button
              type="primary"
              style={{
                backgroundColor: "black",
                fontSize: "22px",
                height: "50px",
              }}
            >
              Generate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
