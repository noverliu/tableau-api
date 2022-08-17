import { VizCommand } from '../interfaces/VizCommand';

export const parseMessageData = (data: string): VizCommand => {
  try {
    const testResult = data.match(/(.*?),(.*?),(.*?),({.*})/);
    if (!testResult) {
      return;
    }
    return {
      commandId: testResult[2],
      hostId: testResult[3],
      name: testResult[1],
      parameters: JSON.parse(testResult[4]),
    };
  } catch (ex) {
    console.error(ex);
  }
};
