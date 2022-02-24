import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import {useSelector, useDispatch} from 'react-redux'
import "./news.scss"

const News = () => {
  const [title, setTitle] = useState('')
  const [description,setDescription] = useState('')
  const [file,setFile] = useState([])
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch()
  const history = useHistory();

console.log(file)

  const submit =  async (data) => {
    try {
      dispatch({type: 'EDIT', payload: {
        id: Math.random(),
        title: title,
        description: description,
        avatar: file,
        activity: false
      }})
      window.localStorage.setItem('news', JSON.stringify( {
        id: Math.random(),
        title: title,
        description: description,
        avatar: file,
        activity: false
      }))
      setLoading(true);
      history.push("/admin");
    } catch (e) {
      setLoading(false);
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
          isInvalid={!!errors.title}
         
          onChange={(e) => ( setTitle(e.target.value))}
         />
        <input 
        type='text' 
        placeholder='description'  
        isInvalid={!!errors.description}
        onChange={(e) => ( setDescription(e.target.value))}
       />
         <input 
          type='file' 
          placeholder='file'  
          isInvalid={!!errors.file}
         
          onChange={(e) => ( setFile(e.target.value))}
         />
        <button className='button' isLoading={loading} type="submit" > добавить новость</button>
      </form>
   
      {/* {value} */}
    </div>
  )
}

export default News