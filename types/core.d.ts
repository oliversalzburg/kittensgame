export type Control = {
	effectsCachedExisting: Record<string, unknown> | null;
	meta: Array<unknown> | null;
	panelData: Record<string, unknown> | null;

	constructor: () => void;

	registerPanel: (id: string, panel: unknown) => void;
	registerMeta: (type: string, meta: unknown, provider: unknown) => void;
	setEffectsCachedExisting: () => void;
	updateEffectCached: () => void;
	updateMetaEffectCached: (metadata: unknown) => void;
	_hasLimitedDiminishingReturn: (name: string) => boolean;
	getMetaEffect: (name: string, metadata: unknown) => unknown;
	getMeta: (name: string, metadata: unknown) => unknown;
	loadMetadata: (meta: unknown, saveMeta: unknown, metaId: string) => unknown;
	filterMetadata: (meta: unknown, fields: Array<string>) => unknown;
	resetStateStackable: (bld: unknown) => void;
	resetStateResearch: () => void;
};

export type TabManager = Control & {

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
