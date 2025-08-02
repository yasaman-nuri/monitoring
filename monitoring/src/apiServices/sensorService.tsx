import { storageKeys } from "../constants/storageKeys";
import type { SensorProps } from "../models/SensorModel";
export const sensorService = {
  setDataInLocalStorage: (data: SensorProps[]) => {
    localStorage.setItem(storageKeys.sensor, JSON.stringify(data));
  },
  initialize: () => {
    const defaultSensors = [
      {
        id: "1",
        name: "دما",
        unit: "°C",
        value: 18,
        lastTenValues: [18]
      },
      {
        id: "2",
        name: "رطوبت",
        unit: "%",
        value: 45,
        lastTenValues: [45]
      },
    ];
    sensorService.setDataInLocalStorage(defaultSensors);
  },
  getAll: () => {
    const sensors = JSON.parse(localStorage.getItem(storageKeys.sensor)!);
    return sensors;
  },
};

//* * * CRUD removes from service and handles in slice * * */

// insert: (data: SensorProps) => {
//   const sensors = [...sensorService.getAll(), data];
//   sensorService.setDataInLocalStorage(sensors);
// },
// update: (data: SensorProps) => {
//   const sensors = [...sensorService.getAll()];
//   const index = sensors.findIndex((sensor) => sensor.id === data.id);
//   sensors[index] = data;
//   sensorService.setDataInLocalStorage(sensors);
// },
// delete: (id: string) => {
//   const sensors = [...sensorService.getAll()];
//   const updatedSensors = sensors.filter((sensor) => sensor.id !== id);
//   localStorage.setItem(storageKeys.sensor, JSON.stringify(updatedSensors));
// },
