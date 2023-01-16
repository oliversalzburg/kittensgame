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

export type TabManager = {

}