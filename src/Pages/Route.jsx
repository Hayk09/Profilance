import React, { useEffect }  from "react";
import { Route as ReactRout, useHistory } from 'react-router-dom'
import { useUser } from '../hooks'
import { useAdmin } from "../hooks";

const Route = ({
    path,
    exact,
    Layout,
    secure,
    component,
}) => {
    const { user, loading } = useUser()
    const {admin } = useAdmin()
    const history = useHistory()

    useEffect(() => {
        if (user && secure && !loading) {
            history.push('/')
        }
         if(admin && secure) {
            history.push('./admin') 
        }
       
        
    }, [user,admin])

    if (loading) return <>...loading</>

    return (
        <Layout>
            <ReactRout
                path={path}
                component={component}
                exact={exact}
                private={secure}
                />
        </Layout>
    )
}

export default Route