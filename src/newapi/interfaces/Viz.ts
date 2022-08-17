import { ApiToolbarPosition, Device, TableauEventName } from '../enums';
import { Workbook } from './Workbook';

export interface Viz {
  url: string;
  id: string;
  isTabHidden: boolean;
  isToolbarHidden: boolean;
  toolbarPosition: ApiToolbarPosition;
  isAutoUpdate: boolean;
  device: Device;
  width: string;
  height: string;
  workbook?: Workbook;
  addEventListener?: (eventName: TableauEventName, cb: Function) => void;
  removeEventListener?: (eventName: TableauEventName, cb: Function) => void;
  dispose?: () => void;
}
