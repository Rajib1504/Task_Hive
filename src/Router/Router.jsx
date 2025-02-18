import { createBrowserRouter, Navigate } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashbord from "../Layout/Dashbord";
import PrivateRoute from "./Private/PrivateRoute";
import WorkerHome from "../Dashbord/Worker/Worker HOme/WorkerHome";
import PaymentHistory from "../Dashbord/BuyerRoute/PaymentHistory/PaymentHistory";
import TaskList from "../Dashbord/Worker/TaskList/TaskList";
import Withdrawals from "./../Dashbord/Worker/Withdrawals/Withdrawals";
import BuyerHome from "../Dashbord/BuyerRoute/BuyerHome/BuyerHome";
import AddNewTask from "../Dashbord/BuyerRoute/AddTask/AddNewTask";
import MyTasks from "../Dashbord/BuyerRoute/My Tasks/MyTasks";
import PurchaseCoins from "../Dashbord/BuyerRoute/PurchaseCoins/PurchaseCoins";
import AdminHome from "../Dashbord/AdminRoutes/AdminHome/AdminHome";
import MannageTasks from "../Dashbord/AdminRoutes/MannageTasks/MannageTasks";
import MannageRoutes from "../Dashbord/AdminRoutes/MannageRoutes/MannageRoutes";
import TaskDetails from "../Dashbord/Worker/TaskList/TaskDetails";
import Payment from "../Dashbord/Payment/Payment";
import Adminroute from "./Private/Adminroute";
import Errror from "../Pages/ErrorPage/Errror";
import WorkerRoute from "./Private/WorkerRoute";
import BuyerRoute from "./Private/BuyerRoute";
import Subbmissions from "./../Dashbord/Worker/Submissions/Subbmissions";
import Blog from './../Pages/Blog/Blog';
import Team from "../Pages/Team/Team";

const Router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Errror></Errror>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {

    path:'/blog',
    element:<Blog/>
  },
  {

    path:'/team',
    element:<Team/>
  },
  // dashbord
  {
    path: "/dashbord",
    errorElement: <Errror></Errror>,
    element: (
      <PrivateRoute>
        <Dashbord></Dashbord>
      </PrivateRoute>
    ),
    children: [
      {
        path: "workerHome",
        element: (
          <WorkerRoute>
            <WorkerHome></WorkerHome>
          </WorkerRoute>
        ),
      },
      {
        path: "/dashbord/taskList",
        element: (
          <WorkerRoute>
            <TaskList></TaskList>
          </WorkerRoute>
        ),
      },
      {
        path: "/dashbord/taskDetails/:id",
        element: (
          <WorkerRoute>
            <TaskDetails></TaskDetails>
          </WorkerRoute>
        ),
      },
      {
        path: "/dashbord/submission",
        element: (
          <WorkerRoute>
            <Subbmissions></Subbmissions>
          </WorkerRoute>
        ),
      },
      {
        path: "withdrawals",
        element: (
          <WorkerRoute>
            {" "}
            <Withdrawals></Withdrawals>
          </WorkerRoute>
        ),
      },
      // buyer routes
      {
        path: "buyerHome",
        element: (
          <BuyerRoute>
            <BuyerHome></BuyerHome>
          </BuyerRoute>
        ),
      },
      {
        path: "addNewTask",
        element: (
          <BuyerRoute>
            {" "}
            <AddNewTask></AddNewTask>
          </BuyerRoute>
        ),
      },
      {
        path: "myTasks",
        element: (
          <BuyerRoute>
            <MyTasks></MyTasks>
          </BuyerRoute>
        ),
      },
      {
        path: "purchaseCoins",
        element: (
          <BuyerRoute>
            {" "}
            <PurchaseCoins></PurchaseCoins>
          </BuyerRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <BuyerRoute>
            <PaymentHistory></PaymentHistory>
          </BuyerRoute>
        ),
      },
      // admin routes
      {
        path: "adminHome",
        element: (
          <Adminroute>
            <AdminHome></AdminHome>
          </Adminroute>
        ),
      },
      {
        path: "mannageRoutes",
        element: (
          <Adminroute>
            {" "}
            <MannageRoutes></MannageRoutes>
          </Adminroute>
        ),
      },
      {
        path: "mannageTasks",
        element: (
          <Adminroute>
            <MannageTasks></MannageTasks>
          </Adminroute>
        ),
      },
      // payment
      {
        path: "payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);
export default Router;
