import AuthLayout from "../layouts/AuthLayout";
// import DefaultLayout from "../layouts/DefaultLayout";
import Homepage from "./HomePage";
import News from './News'
import Login from './Login'
import Register from './Register'
import Admin from './Admin'
import User from './User'


const config = [
  {
    component: Homepage,
    path: "/",
    secure: false,  
    layout: AuthLayout,
    exact: true,
  },
   {
    component: News,
    path: "/news",
    secure: false,
    layout: AuthLayout,
    exact: true,
  },
  {
    component: Login,
    path: "/login",
    secure: false,
    layout: AuthLayout,
    exact: true,
  },
  {
    component: Register,
    path: "/register",
    secure: false,
    layout: AuthLayout,
    exact: true,
  },
  {
    component: Admin,
    path: "/admin",
    secure: true,
    layout: AuthLayout,
    exact: true,
  },
  {
    component: User,
    path: "/user",
    secure: true,
    layout: AuthLayout,
    exact: true,
  },
  
  
];

export default config;
