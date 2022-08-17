import { SheetType } from '../enums';
import { SheetSize } from './SheetSize';
import { TableauBaseWithName } from './TableauBaseWithName';

export interface Sheet extends TableauBaseWithName {
  repositoryUrl: string;
  sheetType: SheetType;
  sizeConstraints: SheetSize;
}
