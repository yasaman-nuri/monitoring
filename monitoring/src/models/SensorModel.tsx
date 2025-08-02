export interface SensorProps {
  id: string;
  name: string;
  unit: string;
  value: number;
  lastTenValues:Array<any>;
}
