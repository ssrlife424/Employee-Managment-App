import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const[email, setEmail] = useState('');
  const [password , setPassword] = useState('')


  const submitHandler = (e)=>{
    e.preventDefault();
    handleLogin(email,password);
console.log("Email is", email)
console.log("Password is", password)
setEmail('');
setPassword('');
  }


  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20">
        <form 
        onSubmit={(e)=>{
          submitHandler(e);
        }}
        className="flex flex-col items-center justify-center">
          <input required
          value = {email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
            className="border-2 outline-none  text-xl bg-transparent placeholder:text-grey border-emerald-600 rounded-full py-3 px-5"
            type="email"
            placeholder="Enter your email"
          />
          <input required
          value = {password}
          onChange={(e)=>{
           setPassword(e.target.value)
          }}
            className=" mt-4 border-2 outline-none  text-xl bg-transparent placeholder:text-grey-100 border-emerald-600 rounded-full py-3 px-5"
            type="password"
            placeholder="Enter your password"
          />
          <button className="mt-7 outline-none border-none text-white text-xl  placeholder:text-white bg-emerald-600 rounded-full py-3 px-5 ">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
