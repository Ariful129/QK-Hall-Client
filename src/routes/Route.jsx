import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../Shared/ErrorPage";
import LogIn from "../Shared/LogIn";
import SignUp from "../Shared/SignUp";
import TokenPueches from "../pages/token_purches/TokenPueches";
import PrivateRoute from "./PrivateRoute";

import HallFee from "../pages/hallfee/HallFee";
import Complain from "../pages/complain/Complain";
import RoomAllotement from "../pages/roomallotement/RoomAllotement";
import Dashbord from "../layout/Dashbord";
import Students from "../Hallmanagement/students/Students";
import Tokens from "../Hallmanagement/tokenpurches/Tokens";
import TokenDetails from "../Hallmanagement/tokendetails/TokenDetails";
import HallFees from "../Hallmanagement/hallfee/HallFees";
import HallFeeDetails from "../Hallmanagement/hallfeedetails/HallFeeDetails";
import Allotements from "../Hallmanagement/allotement/Allotements";
import AllotementDetails from "../Hallmanagement/allotementdtail/AllotementDetails";
import Complains from "../Hallmanagement/complains/Complains";
import NoticeUpload from "../Hallmanagement/notice/NoticeUpload";
import Profile from "../profile/Profile";
import MyProfile from "../profile/MyProfile";
import HallFeeProfiles from "../profile/hallfee/HallFeeProfiles";
import AllotementProfils from "../profile/allotement/AllotementProfils";
import TokenProfiles from "../profile/token/TokenProfiles";
import ContacEmail from "../pages/contact/ContacEmail";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/contact',
        element: <PrivateRoute><ContacEmail></ContacEmail></PrivateRoute>
      },
      {
        path: '/token_purches',
        element: <PrivateRoute><TokenPueches></TokenPueches></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/users')
      },
      // {
      //   path: '/profile',
      //   element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      //   loader: () => fetch('http://localhost:5000/users')
      // },
      {
        path: '/hallfee',
        element: <PrivateRoute><HallFee></HallFee></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path: '/complain',
        element: <PrivateRoute><Complain></Complain></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/users')
      },
      {
        path: '/roomallotement',
        element: <PrivateRoute><RoomAllotement></RoomAllotement></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/users')
      },
      //for Profile
      {
        path: 'profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
        children: [
          {
            path: 'myprofile',
            element: <MyProfile></MyProfile>,
            // loader: () => fetch('http://localhost:5000/users')
          },
          {
            path: 'hallfeeprofile',
            element: <HallFeeProfiles></HallFeeProfiles>,
          },
          {
            path: 'allotmentprofile',
            element: <AllotementProfils></AllotementProfils>,
          },
          {
            path: 'tokenprofile',
            element: <TokenProfiles></TokenProfiles>,
          }
        ]
       },
      //For Dashbord
      {
        path: 'dashboard',
        element: <PrivateRoute><Dashbord></Dashbord></PrivateRoute>,
        children: [
          // normal user routes
          {
            path: 'students',
            element: <Students></Students>
          },
          {
            path: 'tokenreq',
            element: <Tokens></Tokens>
          },
          {
            path: 'tokendetails',
            element: <TokenDetails></TokenDetails>
          },
          {
            path: 'hallfeereq',
            element: <HallFees></HallFees>
          },
          {
            path: 'hallfeedetails',
            element: <HallFeeDetails></HallFeeDetails>
          },
          {
            path: 'allotementreq',
            element: <Allotements></Allotements>

          },
          {
            path: 'allotementdetails',
            element: <AllotementDetails></AllotementDetails>
          },
          {
            path: 'complains',
            element: <Complains></Complains>
          },
          {
            path: 'notice',
            element: <NoticeUpload></NoticeUpload>
          },

        ]
      }


    ]
  },
]);

export default router;