import { createBrowserRouter } from "react-router-dom";
import Sensor from "./components/sensor/Sensor";
const router = createBrowserRouter([
  {
    path: "sensors",
    element: <Sensor />
  },
]);
export default router