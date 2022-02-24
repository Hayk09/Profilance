import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import "./login.scss"



const Login = () => {
  const [userpassword, setUserpassword] = useState('')
  const [useremail, setUseremail] = useState('')
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const history = useHistory();

  const submit = () => {
    try {
      window.localStorage.setItem( 'user', {userpassword: userpassword, useremail: useremail})
      const data = JSON.parse(window.localStorage.getItem('user'))
      console.log(data);
      setUsers(data)
      
      if(userpassword === 'hayksargsyan0909@gmail.com'){
        setLoading(true);
        history.push("/admin");
      } else {
        setLoading(true)
        history.push('/user')
      }
     
    } catch (e) {
      setLoading(false);
      console.log("error signing in", e);
    }
  };
console.log(users,'users');

  return (
    <div className="login">
       <form className="form" noValidate onSubmit={handleSubmit(submit)}>
         <p className="text">Login</p>
       <input
       type='email'
        placeholder="email"
        isInvalid={!!errors.email}
        onChange={(e) => ( setUseremail(e.target.value))}
        {...register("email", { required: true })}
      />
        <input
        type="password"
        placeholder="password"
        isInvalid={!!errors.password}
        onChange={(e) => ( setUserpassword(e.target.value))}
        {...register("password", { required: true })}
      />
      
      <button isLoading={loading} type="submit" className="button_log">
        Log In
      </button>
      <Link to="/register">
        <button className="button" >Create New Account</button>
      </Link>

       </form>

    </div>
  );
};

export default Login;

