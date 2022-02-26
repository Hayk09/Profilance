import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./user.scss"


const User = () => {

    const user = useSelector((state) => state.user.news)
    // user.push(JSON.parse(window.localStorage.getItem('news')))
    const [filters, setFilters] = useState(user)
    const [value, setValue] = useState('')



    //    console.log(user.data.avtivity)
    console.log(filters, 'filter')
    // console.log(filters[0].title.toLowerCase() )
    return (
        <>
            <div className='search_container'>
                <Link to='/news'>
                    <button className='button_news'>добавить новость</button>
                </Link>
                <div>
                    <input placeholder='search' className='search' onChange={(e) => setValue(e.target.value)} />
                </div>

            </div>
            <div className='grid_item' >
                {
                    filters?.filter((item) => item?.title?.toLowerCase()
                        .includes(value?.toLocaleLowerCase())).map((item) => (
                            item.activity === true ? (
                                <div key={item.id}>
                                    <div>
                                        <img src={item.avatar} className='img' />
                                        <p className="time">{item.time}</p>
                                        <p className="title">{item.title}</p>
                                        <p className="description">{item.description}</p>
                                    </div>
                                </div>
                            ) : (
                                <div key={item.id}>
                                    <p className='text'>мы рассмотрим вашу заявку спасибо!</p>
                                </div>
                            )

                        ))
                }

            </div>

        </>

    )
}

export default User