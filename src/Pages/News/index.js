import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import "./news.scss"

const News = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch()
  const history = useHistory();



  const submit = async (data) => {
    data.activity = false
    data.id = uuidv4()
    // data.time = new.Date().toDateString()
    try {
      dispatch({ type: 'EDIT', payload: { ...data } })
      history.push("/user");
    } catch (e) {
      console.log("error signing in", e);
    }
  };



  return (
    <div className='container'>
      <form className='form' noValidate onSubmit={handleSubmit(submit)}>
        <p className='text'> добавить новость</p>
        <input
          type='text'
          placeholder='title'
          {...register("title", { required: true })}
        />
        <input
          type='text'
          placeholder='description'
          {...register("description", { required: true })}
        />
        <textarea />
        <button
          className='button'
          type="submit" >
          добавить новость
        </button>
      </form>
    </div>
  )
}

export default News