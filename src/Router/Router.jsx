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
  // dashbord
  {
    path: "dashbord",
    errorElement: <Errror></Errror>,
    element: (
      <PrivateRoute>
        <Dashbord></Dashbord>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashbord",
        element: <Navigate to={"/dashbord/workerHome"} replace></Navigate>,
      },
      {
        path: "workerHome",
        element: (
          <PrivateRoute>
            <WorkerRoute>
              <WorkerHome></WorkerHome>
            </WorkerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "taskList",
        element: (
          <PrivateRoute>
            <WorkerRoute>
              <TaskList></TaskList>
            </WorkerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "taskDetails/:id",
        element: (
          <PrivateRoute>
            <WorkerRoute>
              <TaskDetails></TaskDetails>
            </WorkerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "submission",
        element: (
          <PrivateRoute>
            <WorkerRoute>
              <Subbmissions></Subbmissions>
            </WorkerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "withdrawals",
        element: (
          <PrivateRoute>
            <WorkerRoute>
              {" "}
              <Withdrawals></Withdrawals>
            </WorkerRoute>
          </PrivateRoute>
        ),
      },
      // buyer routes
      {
        path: "buyerHome",
        element: (
          <PrivateRoute>
            <BuyerRoute>
              <BuyerHome></BuyerHome>
            </BuyerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "addNewTask",
        element: (
          <PrivateRoute>
            <BuyerRoute>
              {" "}
              <AddNewTask></AddNewTask>
            </BuyerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "myTasks",
        element: (
          <PrivateRoute>
            <BuyerRoute>
              <MyTasks></MyTasks>
            </BuyerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "purchaseCoins",
        element: (
          <PrivateRoute>
            <BuyerRoute>
              {" "}
              <PurchaseCoins></PurchaseCoins>
            </BuyerRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <PrivateRoute>
            <BuyerRoute>
              <PaymentHistory></PaymentHistory>
            </BuyerRoute>
          </PrivateRoute>
        ),
      },
      // admin routes
      {
        path: "adminHome",
        element: (
          <PrivateRoute>
            <Adminroute>
              <AdminHome></AdminHome>
            </Adminroute>
          </PrivateRoute>
        ),
      },
      {
        path: "mannageRoutes",
        element: (
          <PrivateRoute>
            <Adminroute>
              {" "}
              <MannageRoutes></MannageRoutes>
            </Adminroute>
          </PrivateRoute>
        ),
      },
      {
        path: "mannageTasks",
        element: (
          <PrivateRoute>
            <Adminroute>
              <MannageTasks></MannageTasks>
            </Adminroute>
          </PrivateRoute>
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
