import React, { useEffect }  from "react";
import { Route as ReactRout, useHistory } from 'react-router-dom'
// import { useUser } from '../hooks'


const Route = ({
    path,
    exact,
    Layout,
    secure,
    component,
}) => {
    // const { user, loading } = useUser()
    // const history = useHistory()

    // useEffect(() => {
    //     if (user && secure && !loading) {
    //         history.push('/')
    //     }
       
    // }, [user])

    // if (loading) return <>...loading</>

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