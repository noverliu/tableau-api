import { Sheet } from './Sheet';
import { TableauBaseWithName } from './TableauBaseWithName';

export interface Workbook extends TableauBaseWithName {
  isDownloadAllowed: boolean;
  activeSheet: Sheet;
  sheets: Sheet[];
}
