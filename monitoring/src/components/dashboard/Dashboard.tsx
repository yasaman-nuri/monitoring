import { useEffect, useState } from "react";
import { sensorService } from "../../apiServices/sensorService";

import type { SensorProps } from "../../models/SensorModel";
import DisplayAsLastValue from "./DisplayAsLastValue";

import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../state-management/store";
import { updateSensorValues } from "../../state-management/sensorSlice";

const Dashboard = () => {
  
  const dispatch = useDispatch()
  const sensors = useSelector((state: RootState) => state.sensorData.items);
  useEffect(() => {
    dispatch(updateSensorValues());
  }, []);
  return (
    <div>
      
      <ul>
        {sensors?.map((sensor) => (
          <li key={sensor.id}>
            <DisplayAsLastValue data={sensor} />
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default Dashboard;
