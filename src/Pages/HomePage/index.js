import React, { useState } from "react";
import { useSelector } from 'react-redux'
import "./home.scss"



const HomePage = () => {
    const user = useSelector((state) => state.user.news)
    const [filters, setFilters] = useState(user)
    const [value, setValue] = useState('')
    const users = JSON.parse(window.localStorage.getItem('user',))

    return (
        <>

            {
                users ? (
                    <div className="box" >
                        <p className="text">Привет Login</p>
                        <input placeholder='search' className='search' onChange={(e) => setValue(e.target.value)} />

                    </div>

                ) : (

                    <div className="box" >
                        <p className="text">Привет, Гость</p>
                        <input placeholder='search' className='search' onChange={(e) => setValue(e.target.value)} />

                    </div>
                )

            }


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
                                <div key={item.id}>
                                    {/* <p className='text'>мы рассмотрим вашу заявку спасибо!</p> */}
                                </div>
                            )

                        ))
                }

            </div>

        </>
    )
}
export default HomePage