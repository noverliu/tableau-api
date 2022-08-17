import { ApiToolbarPosition, Device } from '../enums';
import { Filter } from './Filter';
import { Parameter } from './Parameter';

export interface VizNewOption {
  url: string;
  container: HTMLDivElement;
  width?: string | number;
  height?: string | number;
  hideTabs?: boolean;
  hideToolbar?: boolean;
  toolbarPosition?: ApiToolbarPosition;
  device?: Device;
  filters?: Filter[];
  parameters?: Parameter[];
}
