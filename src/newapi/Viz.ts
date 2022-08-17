import { ApiToolbarPosition, CommandResult, TableauEventName } from './enums';
import { ClientInfoParam, Sheet, Viz as IViz, VizNewOption, Workbook } from './interfaces';
import { parseMessageData, randomId, randomId4, sizeToStr } from './utils';
import { parseResponseParam } from './utils/parseResponseParam';

const buildUrl = (url, id) => {
  const params: string[][] = [];
  params.push([':showVizHome', 'n']);
  params.push([':apiID', id]);
  params.push([':toolbar', 'top']);
  const paramStr = params.map(([k, v]) => `${k}=${v}`).join('&');
  return `${url}?${paramStr}`;
};

const onIframeLoaded = (iframe: HTMLIFrameElement, vizId: string) => {
  iframe.contentWindow.postMessage(`api.GetClientInfoCommand,${randomId4()},${vizId},`, '*');
};

export const Viz = (option: VizNewOption): IViz => {
  const {
    url,
    container,
    width = 800,
    height = 600,
    hideTabs,
    hideToolbar,
    toolbarPosition = ApiToolbarPosition.Bottom,
    device,
    filters,
    parameters,
  } = option;

  const vizId = randomId();
  console.log(vizId);

  const iframe = document.createElement('iframe');
  iframe.setAttribute('scrolling', 'no');
  iframe.style.width = sizeToStr(width);
  iframe.style.height = sizeToStr(height);
  iframe.src = buildUrl(url, vizId);
  iframe.addEventListener('load', (e) => onIframeLoaded(iframe, vizId));

  const subscription = new Map<TableauEventName, Function[]>();

  const bindClientInfo = (parameter: ClientInfoParam, viz: IViz) => {
    const { workbookName, currentSheetName, isAutoUpdate, isDownloadAllowed, publishedSheets } =
      parameter;
    const sheets = publishedSheets as Sheet[];
    const workbook: Workbook = {
      name: workbookName,
      isDownloadAllowed,
      activeSheet: sheets.find((sheet) => sheet.name === currentSheetName),
      sheets,
    };
    viz.workbook = workbook;
    viz.isAutoUpdate = isAutoUpdate;
  };

  const viz: IViz = {
    url,
    id: vizId,
    isTabHidden: hideTabs,
    isToolbarHidden: hideToolbar,
    isAutoUpdate: false,
    device,
    width: `${width}`,
    height: `${height}`,
    toolbarPosition,
    addEventListener: (event, handler) => {
      if (!subscription.has(event)) {
        subscription.set(event, []);
      }
      const list = subscription.get(event);
      list.push(handler);
    },
    removeEventListener: (event, handler) => {
      if (!subscription.has(event)) {
        return;
      }
      const list = subscription.get(event);
      const handlerIndex = list.indexOf(handler);
      if (handlerIndex >= 0) {
        list.splice(handlerIndex, 1);
      }
    },
  };
  const messageHandler = (e: MessageEvent) => {
    if (!e.data || !url.includes(e.origin)) {
      return;
    }
    const params = parseMessageData(e.data);
    if (!params) {
      return;
    }
    const { name, hostId, commandId, parameters } = params;
    if (hostId !== vizId) {
      return;
    }
    console.log(name, params);
    if (name === 'api.GetClientInfoCommand') {
      const response = parseResponseParam<ClientInfoParam>(parameters);
      if (response.result === CommandResult.Success) {
        bindClientInfo(response.data, viz);
      }
    }
  };

  const dispose = () => {
    window.removeEventListener('message', messageHandler);
    iframe.remove();
  };
  viz.dispose = dispose;
  window.addEventListener('message', messageHandler);
  container.append(iframe);

  return viz;
};
