import React, { useState } from "react";

const Header = (props) => {
  // const[username , setusername] = useState('')

  // if(!data){
  //   setusername('Admin')

  // }else{
  //   setusername(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", " ");
    props.changeUser('');
  }
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />{" "}
        <span className="text-3xl font-semibold">username 👋👋</span>{" "}
      </h1>
      <button
        onClick={logOutUser}
        className="px-5 py-2 text-lg font-medium text-white bg-red-500 rounded-sm"
      >
        Log out{" "}
      </button>
    </div>
  );
};

export default Header;
