import { useEffect, useState } from "react";

// import { sensorService } from "../../apiServices/sensorService";
import AddSensor from "../addSensor/AddSensor";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../state-management/store";
import EditSensor from "../editSensor/EditSensor";
import type { SensorProps } from "../../models/SensorModel";

import {
  removeSensor,
  updateSensorValues,
} from "../../state-management/sensorSlice";
import { sensorService } from "../../apiServices/sensorService";

const Sensor = () => {
  const sensors = useSelector((state: RootState) => state.sensorData.items);
  const [sensorToEdit, setSensorToEdit] = useState<SensorProps | null>(null);
  const dispatch = useDispatch();
  useEffect(()=>{
    sensorService.initialize();
  },[])
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(updateSensorValues());
    }, 10000);

    console.log("changed");

    return () => clearInterval(interval);
  }, [dispatch]);

  const handleOnEdit = (data: SensorProps) => {
    setSensorToEdit(data);
  };
  const handleOnRemove = (data: SensorProps) => {
    dispatch(removeSensor(data));
  };

  return (
    <div>
      <div>
        <AddSensor />
      </div>
      <hr />
      <div>
        {sensors.map((sensor) => (
          <div key={sensor.id}>
            {sensor.name} {sensor.value}{" "}
            {`last 10 values:${sensor.lastTenValues}`}
            <div>
              <button onClick={() => handleOnEdit(sensor)}>ویرایش</button>
              <button onClick={() => handleOnRemove(sensor)}>حذف</button>
            </div>
          </div>
        ))}
      </div>
      {sensorToEdit && <EditSensor sensorToEdit={sensorToEdit!} />}
    </div>
  );
};

export default Sensor;
