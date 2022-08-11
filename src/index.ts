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

export enum SheetType {
	DASHBOARD = 'dashboard',
	STORY = 'story',
	WORKSHEET = 'worksheet',
}

export enum SheetSizeBehavior {
	ATLEAST = 'atleast',
	ATMOST = 'atmost',
	AUTOMATIC = 'automatic',
	EXACTLY = 'exactly',
	RANGE = 'range',
}

export enum ApiMenuType {
	Ubertip = 'ubertip'
}

export enum DashboardObjectType {
	ADDIN = 'addIn',
	BLANK = 'blank',
	IMAGE = 'image',
	LEGEND = 'legend',
	PAGE_FILTER = 'pageFilter',
	PARAMETER_CONTROL = 'parameterControl',
	QUICK_FILTER = 'quickFilter',
	TEXT = 'text',
	TITLE = 'title',
	WEB_PAGE = 'webPage',
	WORKSHEET = 'worksheet',
}

export enum ParameterDataType {
	BOOLEAN = 'boolean',
	DATE = 'date',
	DATETIME = 'datetime',
	FLOAT = 'float',
	INTEGER = 'integer',
	STRING = 'string',
}

export enum ParameterAllowableValuesType {
	ALL = 'all',
	LIST = 'list',
	RANGE = 'range',
}

export enum PeriodType {
	DAY = 'day',
	HOUR = 'hour',
	MINUTE = 'minute',
	MONTH = 'month',
	QUARTER = 'quarter',
	SECOND = 'second',
	WEEK = 'week',
	YEAR = 'year',
}

export enum FilterUpdateType {
	ADD='add',
	ALL='all',
	REMOVE='remove',
	REPLACE='replace',
}

export enum NullOption {
	ALL_VALUES='allValues',
	NON_NULL_VALUES='nonNullValues',
	NULL_VALUES='nullValues',
}

export enum DateRangeType {
	CURR='curr',
	LAST='last',
	LASTN='lastn',
	NEXT='next',
	NEXTN='nextn',
	TODATE='todate',
}

export enum FilterType {
	CATEGORICAL='categorical',
	HIERARCHICAL='hierarchical',
	QUANTITATIVE='quantitative',
	RELATIVEDATE='relativedate',
}

export enum SelectionUpdateType {
	ADD='add',
	REMOVE='remove',
	REPLACE='replace',
}

interface TableauBaseWithName {
	getName: () => string;
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
	getCustomViewAsync: ()=>Promise<CustomView>
}

interface TableauEventWithWorksheet extends TableauEvent {
	getWorksheet: () => Worksheet;
}

export interface FilterEvent extends TableauEventWithWorksheet {	
	getFieldName: () => string;
	getFilterAsync: () => Promise<Filter>;
}

export interface MarksEvent extends TableauEventWithWorksheet {
	getMarksAsync: () => Promise<Mark[]>;
}

export interface ParameterEvent extends TableauEvent {
	getParameterName: () => string;
	getParameterAsync: () => Promise<Parameter>;
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

export interface Workbook extends TableauBaseWithName {
	getViz: () => Viz;
	getActiveSheet: () => Sheet;
	getActiveCustomView: () => CustomView;
	getPublishedSheetsInfo: () => SheetInfo[];
	activateSheetAsync: (sheetNameOrIndex: string | number) => Promise<Sheet>;
	revertAllAsync: () => Promise<void>;
	getParametersAsync: () => Promise<Parameter[]>;
	changeParameterValueAsync: (name: string, value: any) => Promise<Parameter>;
	getCustomViewsAsync: () => Promise<CustomView[]>;
	showCustomViewAsync: (customViewNmae: string) => Promise<CustomView>;
	removeCustomViewAsync: (customViewName: string) => Promise<CustomView>;
	rememberCustomViewAsync: (customViewName: string) => Promise<CustomView>;
	setActiveCustomViewAsDefaultAsync: () => void;
}

export interface DataSource extends TableauBaseWithName {
	getIsPrimary: () => boolean;
	getFields: () => Field[];
}

export interface Field extends TableauBaseWithName {
	getAggregation: () => FieldAggregationType;
	getDataSource: () => DataSource;
	getRole: () => FieldRoleType;
}

export interface CustomView extends TableauBaseWithName {
	setName: (name: string) => void;
	getAdvertised: () => boolean;
	setAdvertised: (advertised: boolean) => void;
	getDefault: () => boolean;
	getOwnerName: () => string;
	getUrl: () => string;
	getWorkbook: () => Workbook;
	saveAsync: () => Promise<CustomView>;
}

export interface Sheet extends TableauBaseWithName {
	getIndex: () => number;
	getIsActive: () => boolean;
	getIsHidden: () => boolean;
	getSheetType: () => SheetType;
	getSize: () => SheetSize;
	getUrl: () => string;
	getWorkbook: () => Workbook;
	changeSizeAsync: (size: SheetSize) => Promise<SheetSize>;

	behavior: SheetSizeBehavior;
	maxSize: Size;
	minSize: Size;
}

export interface SheetInfo extends TableauBaseWithName {
	getIndex: () => number;
	getIsActive: () => boolean;
	getIsHidden: () => boolean;
	getSheetType: () => SheetType;
	getSize: () => SheetSize;
	getUrl: () => string;
	getWorkbook: () => Workbook;
}

export interface DataTable extends TableauBaseWithName {
	getData: () => [];
	getColumns: () => Column[];
	getTotalRowCount: () => number;
	getIsSummaryData: () => boolean;
}

export interface LogicalTable {
	getTableId: () => string;
	getCaption: () => string;
}

interface WorksheetSelectMarkAsync {
	(fieldName: string, value: any, updateType: SelectionUpdateType): void;
	(fieldValuesMap: any, updateType: SelectionUpdateType): void;
	(marks: Mark[], updateType: SelectionUpdateType): void;
}

export interface Worksheet extends Sheet {
	getParentDashboard: () => Dashboard;
	getParentStoryPoint: () => StoryPoint;
	getDataSourceAsync: () => Promise<DataSource[]>;
	getSummaryDataAsync: (options: getSummaryDataOptions) => Promise<DataTable>;
	getUnderlyingDataAsync: (options: getUnderlyingDataOptions) => Promise<DataTable>;
	getUnderlyingTableAsync: () => Promise<LogicalTable[]>;
	getUnderlyingTableDataAsync: (tableID: string, options: getUnderlyingDataOptions) => Promise<DataTable>;
	AppendContextMenuAsync: (targetMenu: ApiMenuType, config: ContextMenuOptions) => Promise<string>;
	RemoveContextMenuAsync: (targetMenu: ApiMenuType, menuItemId: string) => Promise<void>;
	ExecuteContextMenuAsync: (targetMenu: ApiMenuType, menuItemId: string) => Promise<void>;
	// Filtering
	getFiltersAsync: () => Promise<Filter[]>;
	applyFilterAsync: (fieldName: string, values: any, updateType: FilterUpdateType, options?: FilterOptions) => Promise<string>;
	applyRangeFilterAsync: (fieldName: string, range: RangeFilterOptions) => Promise<string>;
	applyRelativeDateFilter: (fieldName: string, options: RelativeDateFilterOptions) => Promise<string>;
	applyHierarchicalFilterAsync: (fieldName: string, value: any, options: HierarchicalFilterOptions) => Promise<string>;
	// Selecting
	clearSelectedMarksAsync: () => void;
	getSelectedMarksAsync: () => Promise<Mark[]>;
	selectMarksAsync: WorksheetSelectMarkAsync
}

export interface Dashboard extends Sheet {
	getObjects: () => DashboardObject[];
	getWorksheets: () => Worksheet[];
	getParentStoryPoint: () => StoryPoint;
	// Filtering
	getFiltersAsync: () => Promise<Filter[]>;
	applyFilterAsync: (fieldName: string, values: any, updateType: FilterUpdateType, options?: FilterOptions) => Promise<string>;
}

export interface DashboardObject {
	getObjectType: () => DashboardObjectType;
	getDashboard: () => Dashboard;
	getWorksheet: () => Worksheet;
	getPosition: () => Point;
	getSize: () => Size;
}

export interface Story extends Sheet {
	getStoryPointsInfo: () => StoryPointInfo[];
	getActiveStoryPoint: () => StoryPoint;
	activateStoryPointAsync: (index: number) => Promise<StoryPoint>;
	activateNextStoryPointAsync: () => Promise<StoryPoint>;
	activatePreviousStoryPoint: () => Promise<StoryPoint>;
	revertStoryPointAsync: (index: number) => Promise<StoryPoint>;
}

export interface StoryPoint {
	getIndex: () => number;
	getCaption: () => string;
	getIsActive: () => boolean;
	getIsUpdated: () => boolean;
	getContainedSheet: () => Sheet;
	getParentStory: () => Story;
}

export interface StoryPointInfo {
	getIndex: () => number;
	getCaption: () => string;
	getIsActive: () => boolean;
	getIsUpdated: () => boolean;
	getParentStory: () => Story;
}

export interface Filter {
	getWorksheet: () => Worksheet;
	getFilterType: () => FilterType;
	getFieldName: () => string;
	getAppliedWorksheetAsync: () => Promise<string[]>;
	getFieldAsync: () => Promise<Field>;
	setAppliedWorksheetsAsync:(applyToWorksheets: string[])=>Promise<string[]>
}

export interface CategoricalFilter extends Filter {
	getIsExcludeMode: () => boolean;
	getAppliedValues: () => DataValue[];
	getIsAllSelected: () => boolean;
}

export interface QuantitativeFilter extends Filter {
	getDomainMin: () => DataValue;
	getDomainMax: () => DataValue;
	getMin: () => DataValue;
	getMax: () => DataValue;
	getIncludeNullValues: () => boolean;
}

export interface RelativeDateFilter extends Filter {
	getPeriod: () => PeriodType;
	getRange: () => DateRangeType;
	getRnageN: () => number;
}

export interface FilterOptions {
	isExcludeMode: boolean;
}

export interface RangeFilterOptions {
	min: number | Date;
	max: number | Date;
	nullOption: NullOption
}

export interface RelativeDateFilterOptions {
	anchorDate: Date;
	periodType: PeriodType;
	rangeType: DateRangeType;
	rangeN: number;
}

export interface HierarchicalFilterOptions {

}



export interface Mark {
	getPairs: () => Pair[];
}

export interface Pair {
	fieldName: string;
	value: any;
	formattedValue: string;
}

export interface Parameter extends TableauBaseWithName {
	getCurrentValue: () => DataValue;
	getDataType: () => ParameterDataType;
	getAllowableValuesType: () => ParameterAllowableValuesType;
	getAllowableValues: () => DataValue[];
	getMinValue: () => DataValue;
	getMaxValue: () => DataValue;
	getStepSize: () => number;
	getDateStepPeriod: () => PeriodType;
}

export interface SheetSize {
	behavior: SheetSizeBehavior;
	maxSize: Size;
	minSize: Size;
}

export interface Column {
	getFieldName: () => string;
	getDataType: () => string;
	getIsReferenced: () => boolean;
	getIndex: () => number;
}

export type DataValue = {
	value: any;
	formattedValue: string;
}

export type getSummaryDataOptions = {
	ignoreAliases: boolean
	ignoreSelection: boolean
	maxRows: number
}

export type getUnderlyingDataOptions = {
	ignoreAliases: boolean
	ignoreSelection: boolean
	includeAllColumns: boolean
	maxRows: number
}

export type Size = {
	width: number
	height: number
}

export type Point = {
	x: number
	y: number
}

export type ContextMenuOptions = {
	displayName: string
}

export const Viz: new (parentElement: HTMLElement, url: string, options: VizCreateOptions) => Viz = tableauSoftware.Viz;

export const Mark: new (pairs: Pair[]) => Mark = tableauSoftware.Mark;

export const Pair: new (fieldName: string, value: any) => Pair = tableauSoftware.Pair;

export default tableauSoftware;
