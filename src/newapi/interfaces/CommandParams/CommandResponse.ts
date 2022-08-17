import { CommandResult } from '../../enums';

export interface CommandResponse<T> {
  result: CommandResult;
  data: T;
}
