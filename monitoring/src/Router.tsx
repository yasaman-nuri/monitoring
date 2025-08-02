import { createBrowserRouter } from "react-router-dom";
import Sensor from "./components/sensor/Sensor";


import Dashboard from "./components/dashboard/Dashboard";
const router = createBrowserRouter([
  {
    path: "sensors",
    element: <Sensor />
  },
  {
    path:"device-manager",
    element: <Dashboard/>
  }
]);
export default router