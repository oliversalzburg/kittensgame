import { GamePage } from "./game";

export interface Control {}

export interface TabManager extends Control {
  effectsCachedExisting: Record<string, unknown> | null;
  meta: Array<unknown> | null;
  panelData: Record<string, unknown> | null;

  constructor(this: this, _game: GamePage): unknown;

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

export interface Console {
  static: {
    filters: Record<string, unknown>;
  };

  messages: Array<unknown> | null;
  maxMessages: number;
  messageIdCounter: number;
  ui: null;
  game: GamePage | null;
  filters?: Record<string, unknown>;

  constructor(this: this, game: GamePage): unknown;
  new (game: GamePage);

  msg(this: this, message: string, type: string, tag: string, noBullet: boolean): void;
  clear(this: this): void;
  resetState(this: this): void;
  save(this: this, saveData: unknown): void;
  load(this: this, saveData: unknown): void;
}

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
export interface tab extends ContentRowRenderer, IChildrenAware {
  constructor(this: this, opts: unknown, game: GamePage): void;
  new (opts: unknown, game: GamePage);
}
