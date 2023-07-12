import React from "react";
import LeftSideBar from "./Feed/LeftSideBar";
import Stories from "./Feed/Stories";
import CreatePost from "./Feed/CreatePost";
import Posts from "./Feed/Posts";
import RightSideBar from "./Feed/RightSideBar";

type Props = {};

const Feed = (props: Props) => {
  return (
    <div>
      {/* left */}
      <LeftSideBar />
      {/* stories */}
      {/* <Stories /> */}
      {/* createPost */}
      {/* <CreatePost /> */}
      {/* posts */}
      {/* <Posts /> */}
      {/* right  */}
      {/* <RightSideBar /> */}
    </div>
  );
};

export default Feed;
