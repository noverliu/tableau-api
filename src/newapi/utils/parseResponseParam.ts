import { CommandResult } from '../enums';
import { CommandResponse } from '../interfaces/CommandParams/CommandResponse';

export const parseResponseParam = <T>(param): CommandResponse<T> => {
  return {
    result:
      param['api.commandResult'] === 'api.success' ? CommandResult.Success : CommandResult.Fail,
    data: param['api.commandData'] as T,
  };
};
