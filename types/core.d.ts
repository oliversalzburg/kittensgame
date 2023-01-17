export interface Control {}

export interface TabManager extends Control {
  effectsCachedExisting: Record<string, unknown> | null;
  meta: Array<unknown> | null;
  panelData: Record<string, unknown> | null;

  constructor(this: this, _game: unknown): unknown;

  registerPanel(this: this, id: string, panel: unknown): void;
  registerMeta(this: this, interface: string, meta: unknown, provider: unknown): void;
  setEffectsCachedExisting(this: this): void;
  updateEffectCached(this: this): void;
  updateMetaEffectCached(this: this, metadata: unknown): void;
  _hasLimitedDiminishingReturn(this: this, name: string): boolean;
  getMetaEffect(this: this, name: string, metadata: unknown): unknown;
  getMeta(this: this, name: string, metadata: unknown): unknown;
  loadMetadata(this: this, meta: unknown, saveMeta: unknown, metaId?: string): unknown;
  filterMetadata(this: this, meta: unknown, fields: Array<string>): unknown;
  resetStateStackable(this: this, bld: unknown): void;
  resetStateResearch(this: this): void;
}

export interface Console {}

export interface ButtonController {}
export interface Button extends Control {}
export interface ButtonModernController extends ButtonController {}
export interface ButtonModern extends Button {}
export interface BuildingBtnController extends ButtonModernController {}
export interface BuildingBtn extends ButtonModern {}
export interface BuildingStackableBtnController extends BuildingBtnController {}
export interface BuildingStackableBtn extends BuildingBtn {}
export interface BuildingNotStackableBtnController extends BuildingBtnController {}
export interface BuildingResearchBtn extends BuildingBtn {}

export interface Spacer {}
export interface ContentRowRenderer {}

export interface IGameAware {}
export interface IChildrenAware {}

export interface Panel extends ContentRowRenderer, IChildrenAware {}
export interface tab extends ContentRowRenderer, IChildrenAware {}
