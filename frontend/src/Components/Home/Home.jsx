import React from "react";
import Post from "../Post/Post";
import User from "../User/User";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homeleft">
        <Post
          postImage={
            "https://media.istockphoto.com/photos/giant-panda-bear-picture-id475636556?b=1&k=20&m=475636556&s=170667a&w=0&h=zPcCptPj5UVt5zXgPxBX9LqG6JjriVSCYWl2cIrE324="
            }
          ownerName={"mukho"}
          caption={"PANDA"}
        />
      </div>
      <div className="homeright">
        <User
          userId={"user._id"}
          name={"user.name"}
          avatar={
            "https://media.istockphoto.com/photos/giant-panda-bear-picture-id475636556?b=1&k=20&m=475636556&s=170667a&w=0&h=zPcCptPj5UVt5zXgPxBX9LqG6JjriVSCYWl2cIrE324="
          }
        />
      </div>
    </div>
  );
};

export default Home;
