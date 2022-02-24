import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from '../Pages/Route'
import routes from '../Pages/config'

const RouterProvider = () => {
    return (
        <Router>
            <Switch>
                {
                    routes.map(({ path, layout, secure, component }) => (
                        <Route
                            key={path}
                            path={path}
                            exact
                            Layout={layout}
                            private={secure}
                            component={component}
                            />
                    ))
                }
            </Switch>
        </Router>
    )
}

export default RouterProvider
