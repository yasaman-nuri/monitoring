import { useEffect, useState } from "react";

import { sensorService } from "../../apiServices/sensorService";
import AddSensor from "../addSensor/AddSensor";
import { useSelector } from "react-redux";
import type { RootState } from "../../state-management/store";
import EditSensor from "../editSensor/EditSensor";
import type { SensorProps } from "../../models/SensorModel";

const Sensor = () => {
  const sensors = useSelector((state: RootState) => state.sensorData.items);
  const [sensorToEdit, setSensorToEdit] = useState<SensorProps>();

  useEffect(() => {
    sensorService.initialize();
  }, []);

  const handleOnEdit = (data: SensorProps) => {
    setSensorToEdit(data);
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
            </div>
            <div>
              <button>حذف</button>
            </div>
          </div>
        ))}
      </div>
      <EditSensor sensorToEdit={sensorToEdit!} />
    </div>
  );
};

export default Sensor;
