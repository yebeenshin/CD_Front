// import React, { useState, useEffect } from "react";
import Header from "../component/shared/Header";
import SideBar from "../component/shared/SideBar";
import UserInfo from "../component/mypage/Userinfo";
import { useLocation } from "react-router-dom";

const UserPage = () => {
  const data = useLocation();
  return (
    <div>
      <Header />
      <SideBar />
      <UserInfo key={data.name} userinfo={data.state} />
    </div>
  );
};

export default UserPage;
