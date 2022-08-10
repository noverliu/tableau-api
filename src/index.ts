import { tableauSoftware } from './tableau-2.9.1.js';

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


export interface Workbook {

}

export interface VizResizeEvent {

}

export const Viz: new (parentElement: HTMLElement, url: string, options: VizCreateOptions) => Viz = tableauSoftware.Viz;

export default tableauSoftware;
