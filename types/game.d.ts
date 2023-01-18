export interface Timer {
  handlers: Array<unknown>;
  scheduledHandlers: Array<unknown>;

  ticksTotal: number;
  timestampStart: null;
  totalUpdateTime: null;

  addEvent(this: this, handler: unknown, frequency: unknown): void;
  update(this: this): void;
  scheduleEvent(this: this, handler: unknown): void;
  updateScheduledEvents(this: this): void;
  beforeUpdate(this: this): void;
  afterUpdate(this: this): void;
}

export interface IDataStorageAware {
  constructor(this: this, game: GamePage): void;
}

export interface Telemetry extends IDataStorageAware {
  guid: string | null;
  game: GamePage | null;

  buildRevision: null;
  version: null;
  errorCount: number;

  constructor(this: this, game: GamePage): void;

  generateGuid(this: this): string;

  save(this: this, data: Record<string, unknown>): void;
  load(this: this, data: Record<string, unknown>): void;
  logEvent(this: this, eventType: unknown, payload?: Record<string, unknown>): void;
  logRouteChange(this: this, name: string): void;
}

export interface Server {
  showMotd: boolean;
  motdTitle: null;
  motdContent: null;

  game: GamePage | null;
  motdContentPrevious: null;
  motdFreshMessage: boolean;

  userProfile: null;
  chiral: null;

  lastBackup: null;
  saveData: null;

  constructor(this: this, game: GamePage): void;

  setUserProfile(this: this, userProfile: unknown): void;
  getServerUrl(this: this): string;
  refresh(this: this): void;
  _xhr(
    this: this,
    url: string,
    method: "GET" | "POST",
    data: Record<string, unknown>,
    handler: (resp: unknown) => void
  ): JQuery.jqXHR;
  syncUserProfile(this: this): void;
  syncSaveData(this: this): void;
  pushSave(this: this): void;
  pushSaveMetadata(this: this, guid: string, metadata: unknown): void;
  loadSave(this: this, guid: string): void;
  save(this: this, saveData: Record<string, unknown>): void;
  sendCommand(this: this, command: unknown): void;
  setChiral(this: this, data: unknown): void;
}

export interface UndoChange {
  _static: {
    DEFAULT_TTL: number;
  };
  ttl: number;
  events: Array<{ managerId: string; data: unknown }> | null;

  constructor(this: this, game: GamePage): void;

  addEvent(managerId: string, data: unknown): void;
}

export interface EffectsManager {
  game: GamePage | null;

  constructor(this: this, game: GamePage): void;
  effectMeta(this: this, effectName: string): unknown;

  statics: Record<string, unknown>;
}

export interface GamePage {
  id: null;
  tabs: null;
  resPool: null;
  calendar: null;
  bld: null;
  village: null;
  science: null;
  workshop: null;
  diplomacy: null;
  achievements: null;
  console: null;
  telemetry: null;
  server: null;
  math: null;
  loadingSave: boolean;
  globalEffectsCached: {};
  ticksPerSecond: number;
  isPaused: boolean;
  isCMBREnabled: boolean;
  ticksBeforeSave: number;
  autosaveFrequency: number;
  selectedBuilding: null;
  setSelectedObject(this: this, object: unknown): void;
  clearSelectedObject(this: this): void;
  forceShowLimits: boolean;
  useWorkers: boolean;
  colorScheme: string;
  unlockedSchemes: null;
  timer: null;
  _mainTimer: null;
  karmaKittens: number;
  karmaZebras: number;
  deadKittens: number;
  ironWill: boolean;
  saveVersion: number;
  opts: null;
  gatherTimeoutHandler: null;
  gatherClicks: number;
  cheatMode: boolean;
  systemShockMode: boolean;
  ticks: number;
  totalUpdateTime: Array<number>;
  totalUpdateTimeTicks: number;
  totalUpdateTimeCurrent: number;
  fps: null;
  pauseTimestamp: number;
  lastDateMessage: null;
  effectsMgr: null;
  managers: null;
  undoChange: null;
  ui: null;
  dropBoxClient: null;
  isLocalhost: boolean;
  devMode: boolean;
  mobileSaveOnPause: boolean;
  winterCatnipPerTick: number;
  featureFlags: Record<
    "MAUSOLEUM_PACTS" | "QUEUE" | "SPACE_EXPL" | "VILLAGE_MAP",
    { beta: boolean; main: boolean }
  >;

  constructor(this: this, containerId: string): void;

  getFeatureFlag(this: this, flag: string): boolean;
  updateWinterCatnip(this: this): void;
  setDropboxClient(this: this, dropBoxClient: unknown): void;
  heartbeat(this: this): void;
  getEffectMeta(this: this, effectName: string): void;
  getEffect(this: this, effectName: string): void;
  updateCaches(this: this): void;
  getLimitedDR(this: this, effect: unknown, limit: number): unknown;
  msg(this: this, message: string, type: unknown, tag: unknown, noBullet: boolean): unknown;
  clearLog(this: this): void;
  saveUI(this: this): void;
  resetState(this: this): void;
  _publish(this: this, topic: unknown, arg: unknown): void;
  reload(this: this): void;
  save(this: this): void;
  _prepareSaveData<TSaveData>(this: this, saveData: TSaveData): TSaveData;
  _saveDataToString(this: this, saveData: unknown): string;
  _wipe(this: this): void;
  wipe(this: this): void;
  closeOptions(this: this): void;
  toggleScheme(this: this, themeId: string): void;
  togglePause(this: this): void;
  updateOptionsUI(this: this): void;
}
