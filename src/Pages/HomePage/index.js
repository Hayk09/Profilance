import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./home.scss"
// import {useSelector, useDispatch} from 'react-redux'


const HomePage = () => {
    const user = useSelector((state) => state.user.news)
    const [filters,setFilters] = useState(user)
    const [value, setValue]=useState('')

    

   
    console.log(filters,'filter')
    console.log(filters[0].title.toLowerCase() )
    return (
        <>
            <div >
                <input placeholder='search'  className='search' onChange={(e)=>setValue(e.target.value)} />
            </div>
            <div className='container'>
                {
                     filters?.filter((item) => item?.title?.toLowerCase()
                     .includes(value?.toLocaleLowerCase())).map((item) => (
                        item.activity === true ? (
                            <div className='grid_item' key={item.id}>
                                <img src={item.avatar} className='img' />
                                <div className='text'>
                                    <p>{item.title}</p>
                                    <p>{item.description}</p>
                                </div>

                            </div>
                        ) : (
                            <div>
                                <p className='text'>мы рассмотрим вашу заявку спасибо!</p>
                            </div>
                        )

                    ))
                }

            </div>

        </>
    )
}
export default HomePage