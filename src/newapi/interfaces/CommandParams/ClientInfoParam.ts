import { DashboardZone } from '../DashboardZone';
import { Sheet } from '../Sheet';
import { Story } from '../Story';

export interface ClientInfoParam {
  currentSheetName: string;
  dashboardZones: DashboardZone[];
  instanceId: string;
  isAutoUpdate: boolean;
  isDownloadAllowed: boolean;
  publishedSheets: Sheet[];
  workbookName: string;
  story: Story | null;
}
