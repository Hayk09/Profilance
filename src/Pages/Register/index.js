import React from 'react'
import { useForm } from "react-hook-form";
import { COUNTRIES } from "../../constats";
import "./register.scss"

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
    
  const submit =  () => {
   
  };


  return (
      <div  className="register" >
            <form className='form' noValidate onSubmit={handleSubmit(submit)}>
              <p className='text'>Register</p>
            <input
                placeholder="email"
                isInvalid={!!errors.email}
                {...register("email", { required: true })}
              />
               <input
                placeholder="phone_number"
                isInvalid={!!errors.phone_number}
                {...register("phone_number", { required: true })}
                type="number"
                pattern="[0-9+]*"
              />
              <input
                placeholder="first_name"
                isInvalid={!!errors.first_name}
                {...register("first_name", { required: true })}
              />
              <input
                placeholder="last_name"
                isInvalid={!!errors.last_name}
                {...register("last_name", { required: true })}
              />
              <input
                placeholder="age"
                isInvalid={!!errors.age}
                {...register("age", { required: true })}
                type="number"
                pattern="[0-9]*"
              />
              <input
                placeholder="password"
                isInvalid={!!errors.password}
                {...register("password", { required: true })}
                type="password"
              />
              <select
                color="#E09145"
                placeholder="Country"
                isInvalid={!!errors.country}
                {...register("country", { required: true })}
              >
                {COUNTRIES.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>

              <button type="submit" color="#E09145" className='button' >
                Register
              </button>

            </form>
      </div>
  )
}

export default Register