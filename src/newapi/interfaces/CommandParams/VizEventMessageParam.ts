import { BaseMessageParam } from './BaseMessageParam';

interface VizEventCommandData {}

class VizEventMessageParam<T extends VizEventCommandData> implements BaseMessageParam {
  commandData: T;
  workbookName: string;
  worksheetName: string;
  dataJson: string;
  constructor(m: string) {
    super(m);
    const paramObj = JSON.parse(m);
    this.workbookName = paramObj['api.workbookName'];
    this.worksheetName = paramObj['api.worksheetName'];
    this.dataJson = paramObj['api.commandData'];
    this.commandData = JSON.parse(this.dataJson);
  }
}
