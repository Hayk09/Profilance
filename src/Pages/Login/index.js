import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import "./login.scss"



const Login = ({closeModal}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const history = useHistory();

  const submit = (data) => {
    try {
      window.localStorage.setItem('user', JSON.stringify(data))
      if (data.email === 'admin@gmail.com') {
        history.push("/admin");
      } else {
        history.push('/user')
      }

    } catch (e) {
      console.log("error signing in", e);
    }
  };


  return (

    <div className='modalBackgorund'>
      <div className='modalContainer'>
        <button 
          onClick={() => closeModal(false)}
          className='closeModalBtn'> X </button>
        <div className='title'>
          <h2 >Ты уверен, что хочешь продолжить? Авторизоваться?</h2>
          <div >
            <div>
              <form className="form"  noValidate onSubmit={handleSubmit(submit)}>
                <h2 className="text">Вход</h2>
                <input
                  type='email'
                  placeholder="email"
                  {...register("email", { required: true })}
                />
                <input
                  type="password"
                  placeholder="password"
                  {...register("password", { required: true })}
                />
                <button type="submit" className="button_log">
                  Вход
                </button>
                <button  className="button_log" onClick={()=> history.push('/')}>
                  Выход
                </button>
                
                  <button className="button" > регистрация </button>
                  <button onClick={() => closeModal(false)}>отменить</button>
              </form>
            </div>

  
          </div>
        </div>
      </div>
    </div>






  );
};

export default Login;

