import { GamePage } from "./game";
import { Achievement, Badge } from "./js/achievements";

export interface SaveData {
  ach?: {
    badges?: Array<Partial<Badge>>;
    badgesUnlocked?: boolean;
  };
  achievements?: Array<Partial<Achievement>>;
}

export interface Control {}

export interface Metadata {
  name: string;
}

export interface TabManager<TMetadata = unknown> extends Control {
  effectsCachedExisting: Record<string, unknown> | null;
  meta: Array<TMetadata> | null;
  panelData: Record<string, Panel> | null;

  constructor(this: this, _game: GamePage): unknown;

  registerPanel(this: this, id: string, panel: Panel): void;
  registerMeta(this: this, interface: string, meta: unknown, provider: unknown): void;
  setEffectsCachedExisting(this: this): void;
  updateEffectCached(this: this): void;
  updateMetaEffectCached(this: this, metadata: unknown): void;
  _hasLimitedDiminishingReturn(this: this, name: string): boolean;
  getMetaEffect(this: this, name: string, metadata: unknown): unknown;
  getMeta<TMetadataLocal extends Metadata>(
    this: this,
    name: string,
    metadata: Array<TMetadataLocal>
  ): TMetadataLocal;
  loadMetadata<TMetadataLocal extends Metadata>(
    this: this,
    meta: Array<TMetadataLocal>,
    saveMeta: Array<Partial<TMetadataLocal>>,
    metaId?: string
  ): unknown;
  filterMetadata<TMetadataLocal extends Metadata, TFields extends keyof TMetadataLocal>(
    this: this,
    meta: Array<TMetadataLocal>,
    fields: Array<TFields>
  ): Array<Pick<TMetadataLocal, TFields>>;
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

export interface Panel extends ContentRowRenderer, IChildrenAware {
  game: GamePage | null;

  collapsed: boolean;
  visible: boolean;
  name: string;

  panelDiv: HTMLElement | null;

  //------ collapse ------
  toggle: HTMLElement | null;
  contentDiv: HTMLElement | null;

  title?: HTMLElement;

  constructor(this: this, label: string, tabManager: unknown): void;
  new (label: string, tabManager: unknown);

  render(this: this, container: HTMLElement): HTMLElement;
  collapse(this: this, isCollapsed: boolean): void;
  onToggle(this: this, isCollapsed: boolean): void;
  setVisible(this: this, visible: boolean): void;
  update(this: this): void;
  setGame(this: this, game: GamePage): void;

  inherited(arguments: IArguments): unknown;
}

export interface TabOptions {
  id: string;
  name: string;
}
export interface TabButton {
  game?: GamePage;
  tab?: tab;
  update(): void;
}
export interface tab extends ContentRowRenderer, IChildrenAware {
  game: GamePage | null;
  buttons: Array<TabButton> | null;

  tabId: string | null;
  tabName: string | null;
  domNode: null;
  visible: true;

  constructor(this: this, opts: TabOptions, game: GamePage): void;
  new (opts: TabOptions, game: GamePage);

  render(this: this, tabContainer: HTMLElement): void;
  update(this: this): void;
  updateTab(this: this): void;
  addButton(this: this, button: TabButton): void;

  inherited(arguments: IArguments): unknown;
}
