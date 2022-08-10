import { tableauSoftware } from './tableau-2.9.1.js';

const TableauPromise: TableauPromise = tableauSoftware.Promise;

interface TableauPromise<T> extends Promise<T> {
	then: (callback: Function, errback: Function) => TableauPromise;
	always: (callback: Function) => TableauPromise;
	otherwise: (errback: Function) => TableauPromise;
}

export declare enum ErrorCode {
	BROWSER_NOT_CAPABLE = "browserNotCapable",
	DOWNLOAD_WORKBOOK_NOT_ALLOWED = "downloadWorkbookNotAllowed",
	FILTER_CANNOT_BE_PERFORMED = "filterCannotBePerformed",
	INDEX_OUT_OF_RANGE = "indexOutOfRange",
	INTERNAL_ERROR = "internalError",
	INVALID_AGGREGATION_FIELD_NAME = "invalidAggregationFieldName",
	INVALID_CUSTOM_VIEW_NAME = "invalidCustomViewName",
	INVALID_DATE_PARAMETER = "invalidDateParameter",
	INVALID_FILTER_FIELDNAME = "invalidFilterFieldName",
	INVALID_FILTER_FIELDNAME_OR_VALUE = "invalidFilterFieldNameOrValue",
	INVALID_FILTER_FIELDVALUE = "invalidFilterFieldValue",
	INVALID_PARAMETER = "invalidParameter",
	INVALID_SELECTION_DATE = "invalidSelectionDate",
	INVALID_SELECTION_FIELDNAME = "invalidSelectionFieldName",
	INVALID_SELECTION_VALUE = "invalidSelectionValue",
	INVALID_SIZE = "invalidSize",
	INVALID_SIZE_BEHAVIOR_ON_WORKSHEET = "invalidSizeBehaviorOnWorksheet",
	INVALID_TOOLBAR_BUTTON_NAME = "invalidToolbarButtonName",
	INVALID_URL = "invalidUrl",
	MAX_VIZ_RESIZE_ATTEMPTS = "maxVizResizeAttempts",
	MISSING_MAX_SIZE = "missingMaxSize",
	MISSING_MINMAX_SIZE = "missingMinMaxSize",
	MISSING_MIN_SIZE = "missingMinSize",
	MISSING_RANGEN_FOR_RELATIVE_DATE_FILTERS = "missingRangeNForRelativeDateFilters",
	NOT_ACTIVE_SHEET = "notActiveSheet",
	NO_URL_FOR_HIDDEN_WORKSHEET = "noUrlForHiddenWorksheet",
	NO_URL_OR_PARENT_ELEMENT_NOT_FOUND = "noUrlOrParentElementNotFound",
	NULL_OR_EMPTY_PARAMETER = "nullOrEmptyParameter",
	SERVER_ERROR = "serverError",
	SHEET_NOT_IN_WORKBOOK = "sheetNotInWorkbook",
	STALE_DATA_REFERENCE = "staleDataReference",
	UNSUPPORTED_EVENT_NAME = "unsupportedEventName",
	VIZ_ALREADY_IN_MANAGER = "vizAlreadyInManager"
}

export declare enum ApiToolbarPosition {
	TOP = 'top',
	BOTTOM = 'bottom'
}

export declare enum ToolbarButtonName {
	UNDO = 'undo',
	REDO = 'redo'
}

export declare enum TableauEventName {
	CUSTOM_MARK_CONTEXT_MENU = 'custommarkcontextmenu',
	CUSTOM_VIEW_LOAD = 'customviewload',
	CUSTOM_VIEW_REMOVE = 'customviewremove',
	CUSTOM_VIEW_SAVE = 'customviewsave',
	CUSTOM_VIEW_SET_DEFAULT = 'customviewsetdefault',
	FILTER_CHANGE = 'filterchange',
	FIRST_INTERACTIVE = 'firstinteractive',
	FIRST_VIZ_SIZE_KNOWN = 'firstvizsizeknown',
	MARKS_HIGHLIGHT = 'markshighlight',
	MARKS_SELECTION = 'marksselection',
	PARAMETER_VALUE_CHANGE = 'parametervaluechange',
	STORY_POINT_SWITCH = 'storypointswitch',
	TAB_SWITCH = 'tabswitch',
	TOOLBAR_STATE_CHANGE = 'toolbarstatechange',
	URL_ACTION = 'urlaction',
	VIZ_RESIZE = 'vizresize'
}

export enum FieldAggregationType {
	ATTR = 'ATTR',
	AVG = 'AVG',
	COLLECT = 'COLLECT',
	COUNT = 'COUNT',
	COUNTD = 'COUNTD',
	DAY = 'DAY',
	END = 'END',
	HOUR = 'HOUR',
	INOUT = 'INOUT',
	KURTOSIS = 'KURTOSIS',
	MAX = 'MAX',
	MDY = 'MDY',
	MEDIAN = 'MEDIAN',
	MIN = 'MIN',
	MINUTE = 'MINUTE',
	MONTH = 'MONTH',
	MONTHYEAR = 'MONTHYEAR',
	NONE = 'NONE',
	PERCENTILE = 'PERCENTILE',
	QTR = 'QTR',
	QUART1 = 'QUART1',
	QUART3 = 'QUART3',
	SECOND = 'SECOND',
	SKEWNESS = 'SKEWNESS',
	STDEV = 'STDEV',
	STDEVP = 'STDEVP',
	SUM = 'SUM',
	SUM_XSQR = 'SUM_XSQR',
	TRUNC_DAY = 'TRUNC_DAY',
	TRUNC_HOUR = 'TRUNC_HOUR',
	TRUNC_MINUTE = 'TRUNC_MINUTE',
	TRUNC_MONTH = 'TRUNC_MONTH',
	TRUNC_QTR = 'TRUNC_QTR',
	TRUNC_SECOND = 'TRUNC_SECOND',
	TRUNC_WEEK = 'TRUNC_WEEK',
	TRUNC_YEAR = 'TRUNC_YEAR',
	USER = 'USER',
	VAR = 'VAR',
	VARP = 'VARP',
	WEEK = 'WEEK',
	WEEKDAY = 'WEEKDAY',
	YEAR = 'YEAR',
}

export enum FieldRoleType {
	DIMENSION = 'dimension',
	MEASURE = 'measure',
	UNKNOWN = 'unknown'
}

export interface TableauException {
	tableauSoftwareErrorCode: ErrorCode;
	message: string;
}

export interface VizManager {
	getVizs: () => Viz[];
}

interface Viz {
	
	getAreTabsHidden: () => boolean;
	getIsToolbarHidden: () => boolean;
	getIsHidden: () => boolean;
	getParentElement: () => HTMLElement;
	getUrl: () => string;
	getWorkbook: () => Workbook;
	getAreAutomaticUpdatesPaused: () => boolean;
}

export interface VizCreateOptions {
	disableUrlActionsPopups: boolean
	hideTabs: boolean
	hideToolbar: boolean
	instanceIdToClone: string
	height: string
	width: string
	device: string
	onFirstInteractive: (e: TableauEvent) => void
	onFirstVizSizeKnown: (e: VizResizeEvent) => void
	toolbarPosition: ApiToolbarPosition
}

export interface ToolbarState {
	getViz: () => Viz;
	isButtonEnabled: (toolbarButtonName: ToolbarButtonName) => boolean;
}

export interface TableauEvent {
	getViz: () => Viz;
	getEventName: () => TableauEventName;
}

export interface CustomMarkContextMenu extends TableauEvent {
	getContextMenuId: () => string;
}

export interface CustomViewEvent extends TableauEvent {
	getCustomViewAsync: ()=>TableauPromise<CustomView>
}

interface TableauEventWithWorksheet extends TableauEvent {
	getWorksheet: () => Worksheet;
}

export interface FilterEvent extends TableauEventWithWorksheet {	
	getFieldName: () => string;
	getFilterAsync: () => TableauPromise<Filter>;
}

export interface MarksEvent extends TableauEventWithWorksheet {
	getMarksAsync: () => TableauPromise<Mark[]>;
}

export interface ParameterEvent extends TableauEvent {
	getParameterName: () => string;
	getParameterAsync: () => TableauPromise<Parameter>;
}

export interface StoryPointSwitchEvent extends TableauEvent {
	getOldStoryPointInfo: () => StoryPointInfo;
	getNewStoryPoint: () => StoryPoint;
}

export interface TabSwitchEvent extends TableauEvent {
	getOldSheetName: () => string;
	getNewSheetName: () => string;
}

export interface ToolbarStateEvent extends TableauEvent {
	getToolbarState: () => ToolbarState;
}

export interface UrlActionEvent {
	getURL: () => string;
	getTarget: () => string;
}

export interface VizResizeEvent extends TableauEvent {
	GetAvailableSize: () => {}
}

export interface Workbook {
	getViz: () => Viz;
	getActiveSheet: () => Sheet;
	getActiveCustomView: () => CustomView;
	getPublishedSheetsInfo: () => SheetInfo[];
	getName: () => string;
	activateSheetAsync: (sheetNameOrIndex: string | number) => TableauPromise<Sheet>;
	revertAllAsync: () => TableauPromise;
	getParametersAsync: () => TableauPromise<Parameter[]>;
	changeParameterValueAsync: (name: string, value: any) => TableauPromise<Parameter>;
	getCustomViewsAsync: () => TableauPromise<CustomView[]>;
	showCustomViewAsync: (customViewNmae: string) => TableauPromise<CustomView>;
	removeCustomViewAsync: (customViewName: string) => TableauPromise<CustomView>;
	rememberCustomViewAsync: (customViewName: string) => TableauPromise<CustomView>;
	setActiveCustomViewAsDefaultAsync: () => void;
}

export interface DataSource {
	getName: () => string;
	getIsPrimary: () => boolean;
	getFields: () => Field[];
}

export interface Field {
	getName: () => string;
	getAggregation: () => FieldAggregationType;
	getDataSource: () => DataSource;
	getRole: () => FieldRoleType;
}

export interface CustomView {
	getName: () => string;
	setName: (name: string) => void;
	getAdvertised: () => boolean;
	setAdvertised: (advertised: boolean) => void;
	getDefault: () => boolean;
	getOwnerName: () => string;
	getUrl: () => string;
	getWorkbook: () => Workbook;
	saveAsync: () => TableauPromise<CustomView>;
}

export interface Sheet {

}

export interface SheetInfo {

}

export interface Worksheet {

}

export interface StoryPoint {

}

export interface StoryPointInfo {

}

export interface CustomView {

}


export interface Filter {

}

export interface Mark {

}

export interface Parameter {

}

export type Size = {
	width: number
	height: number
}

export type Point = {
	x: number
	y: number
}

export const Viz: new (parentElement: HTMLElement, url: string, options: VizCreateOptions) => Viz = tableauSoftware.Viz;

export default tableauSoftware;
