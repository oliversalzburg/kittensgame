export type Control = Record<string, unknown>;

export type TabManager = Control & {
	effectsCachedExisting: Record<string, unknown> | null;
	meta: Array<unknown> | null;
	panelData: Record<string, unknown> | null;

	constructor: (this: TabManager) => void;

	registerPanel: (this: TabManager, id: string, panel: unknown) => void;
	registerMeta: (this: TabManager, type: string, meta: unknown, provider: unknown) => void;
	setEffectsCachedExisting: (this: TabManager) => void;
	updateEffectCached: (this: TabManager) => void;
	updateMetaEffectCached: (this: TabManager, metadata: unknown) => void;
	_hasLimitedDiminishingReturn: (this: TabManager, name: string) => boolean;
	getMetaEffect: (this: TabManager, name: string, metadata: unknown) => unknown;
	getMeta: (this: TabManager, name: string, metadata: unknown) => unknown;
	loadMetadata: (this: TabManager, meta: unknown, saveMeta: unknown, metaId: string) => unknown;
	filterMetadata: (this: TabManager, meta: unknown, fields: Array<string>) => unknown;
	resetStateStackable: (this: TabManager, bld: unknown) => void;
	resetStateResearch: (this: TabManager) => void;
}

export type Console = {}

export type ButtonController = {}
export type Button = Control & {}
export type ButtonModernController = ButtonController & {}
export type ButtonModern = Button & {}
export type BuildingBtnController = ButtonModernController & {}
export type BuildingBtn = ButtonModern & {}
export type BuildingStackableBtnController = BuildingBtnController & {}
export type BuildingStackableBtn = BuildingBtn & {};
export type BuildingNotStackableBtnController = BuildingBtnController & {};
export type BuildingResearchBtn = BuildingBtn & {};

export type Spacer = {};
export type ContentRowRenderer = {};

export type IGameAware = {};
export type IChildrenAware = {};

export type Panel = ContentRowRenderer & IChildrenAware & {};
export type tab = ContentRowRenderer & IChildrenAware & {};
