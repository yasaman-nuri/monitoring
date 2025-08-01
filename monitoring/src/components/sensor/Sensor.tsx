import { useEffect, useState } from "react";

// import { sensorService } from "../../apiServices/sensorService";?
import AddSensor from "../addSensor/AddSensor";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../state-management/store";
import EditSensor from "../editSensor/EditSensor";
import type { SensorProps } from "../../models/SensorModel";
// import { useForm } from "react-hook-form";
import { removeSensor } from "../../state-management/sensorSlice";

const Sensor = () => {
  const sensors = useSelector((state: RootState) => state.sensorData.items);
  const [sensorToEdit, setSensorToEdit] = useState<SensorProps | null>(null);
  const [changedValue, setChangedValue] = useState<number>();
 const generateRandom = () => {

    const newValue = (Math.floor(Math.random() * 100) + 1);
    console.log(newValue);
    
    return setChangedValue(newValue)
 
};
  const dispatch = useDispatch();
  // const {reset} = useForm<SensorProps>()

  useEffect(() => {
    setTimeout(()=>{generateRandom()},200)
    console.log('changed');
    
  }, []);

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
            {sensor.name} {sensor.value}
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
