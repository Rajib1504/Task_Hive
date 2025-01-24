import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashbord from "../Layout/Dashbord";
import PrivateRoute from "./Private/PrivateRoute";
import WorkerHome from "../Dashbord/Worker/Worker HOme/WorkerHome";
import PaymentHistory from "../Dashbord/BuyerRoute/PaymentHistory/PaymentHistory";
import TaskList from "../Dashbord/Worker/TaskList/TaskList";
import Subbmissions from "../Dashbord/Worker/Submissions/Subbmissions";
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
        path: "workerHome",
        element: <WorkerHome></WorkerHome>,
      },
      {
        path: "taskList",
        element: <TaskList></TaskList>,
      },
      {
        path: "taskDetails/:id",
        element: <TaskDetails></TaskDetails>,
      },
      {
        path: "submission",
        element: <Subbmissions></Subbmissions>,
      },
      {
        path: "withdrawals",
        element: <Withdrawals></Withdrawals>,
      },
      // buyer routes
      {
        path: "buyerHome",
        element: <BuyerHome></BuyerHome>,
      },
      {
        path: "addNewTask",
        element: <AddNewTask></AddNewTask>,
      },
      {
        path: "myTasks",
        element: <MyTasks></MyTasks>,
      },
      {
        path: "purchaseCoins",
        element: <PurchaseCoins></PurchaseCoins>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      // admin routes
      {
        path: "adminHome",
        element: (
          // <Adminroute>
          <AdminHome></AdminHome>
          // </Adminroute>
        ),
      },
      {
        path: "mannageRoutes",
        element: <MannageRoutes></MannageRoutes>,
      },
      {
        path: "mannageTasks",
        element: <MannageTasks></MannageTasks>,
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
