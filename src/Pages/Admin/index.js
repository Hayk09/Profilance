import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./admin.scss"

const Admin = () => {
  const user = useSelector((state) => state.user.news)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE', payload: {
        id: id
      }
    })
    setLoading(!loading)
  }
  const onSave = (id) => {
    dispatch({
      type: 'CREATE', payload: {
        id: id
      }
    })
    // const data = JSON.parse(window.localStorage.getItem('news' ))
    //  data.activity = true
    //  console.log(data)
    // window.localStorage.setItem('news' , JSON.stringify(data) )
  }
  // const onChange = () => {
  //   dispatch({
  //     type: 'EDIT', payload: {
  //       // activity:false
  //     }
  //   })
  // }

  return (
    <>
      {/* <div className='search_container'>
        <Link to='/news'>
          <button className='button_news'>добавить новость</button>
        </Link>
        <input placeholder='search' className='search' onChange={onChange} />
      </div> */}
      <div className='grid_item'>
        {
          user?.map((item) => (
            item.activity === true ? (
              <div key={item.id}>
                <div>
                <button onClick={() => onDelete(item.id)} className='bttn'>X</button>
                  <img src={item.avatar} className='img' />
                  <p className="time">{item.time}</p>
                  <p className="title">{item.title}</p>
                  <p className="description">{item.description}</p>
                </div>
               
              </div>
            ) : (
              <div key={item.id}>
                <img src={item.avatar}  />
                <div >
                  <p className="time">{item.title}</p>
                  <p className="title">{item.description}</p>
                  <p className="description">{item.time}</p>
                </div>
                <button onClick={onSave} className='bttn1' >&radic;</button>
                <button onClick={onDelete} className='bttn'>X</button>
              </div>
            )

          ))
        }

      </div>

    </>
  )
}

export default Admin