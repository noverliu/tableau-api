import { ZoneType } from '../enums';

export interface DashboardZone {
  name: string;
  height: number;
  width: number;
  x: number;
  y: number;
  zoneId: number;
  zoneType: ZoneType;
}
