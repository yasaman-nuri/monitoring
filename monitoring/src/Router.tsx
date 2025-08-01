import { createBrowserRouter } from "react-router-dom";
import Sensor from "./components/sensor/Sensor";

import DisplayResult from "./components/displayResult/DisplayResult";
const router = createBrowserRouter([
  {
    path: "sensors",
    element: <Sensor />
  },
  {
    path:"device-manager",
    element: <DisplayResult/>
  }
]);
export default router