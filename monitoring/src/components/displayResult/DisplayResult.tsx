import { useEffect, useState } from "react";
import { sensorService } from "../../apiServices/sensorService";

import type { SensorProps } from "../../models/SensorModel";
import DisplayAsLastValue from "./DisplayAsLastValue";
import ChangeValueGenerator from "../sensor/ChangeValueGenerator";

const DisplayResult = () => {
  const [allSensors, setAllSensors] = useState<SensorProps[]>();
  useEffect(() => {
    setAllSensors(sensorService.getAll());
  }, []);
  return (
    <div>
       <ChangeValueGenerator/>
      <ul>
        {allSensors?.map((sensor) => (
          <li key={sensor.id}>
            <DisplayAsLastValue data={sensor} />
          </li>
        ))}
      </ul>
     
    </div>
  );
};

export default DisplayResult;
