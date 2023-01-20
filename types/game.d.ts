import { Console } from "./core";
import { Calendar } from "./js/calendar";
import { Math } from "./js/math";
import { ResourceManager } from "./js/resources";

export interface Handler {
  phase: number;
  frequency: number;
  handler: () => unknown;
}
export interface Timer {
  handlers: Array<Handler>;
  scheduledHandlers: Array<() => unknown>;

  ticksTotal: number;
  timestampStart: number | null;
  totalUpdateTime: number | null;

  currentTime?: number;
  averageTime?: number;

  new ();

  addEvent(this: this, handler: () => unknown, frequency: number): void;
  update(this: this): void;
  scheduleEvent(this: this, handler: () => unknown): void;
  updateScheduledEvents(this: this): void;
  beforeUpdate(this: this): void;
  afterUpdate(this: this): void;
}

export interface IDataStorageAware {
  constructor(this: this, game: GamePage): void;

  save(this: this, data: Record<string, unknown>): void;
  load(this: this, data: Record<string, unknown>): void;
}

export interface Telemetry extends IDataStorageAware {
  guid: string | null;
  game: GamePage | null;

  buildRevision: null;
  version: null;
  errorCount: number;

  constructor(this: this, game: GamePage): void;
  new (game: GamePage);

  generateGuid(this: this): string;

  save(this: this, data: Record<string, unknown>): void;
  load(this: this, data: { telemetry?: { guid: string } }): void;
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
  new (game: GamePage);

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

export type GameOptions = {
  usePerSecondValues: boolean;
  notation: "si";
  forceHighPrecision: boolean;
  usePercentageResourceValues: boolean;
  showNonApplicableButtons: boolean;
  usePercentageConsumptionValues: boolean;
  highlightUnavailable: boolean;
  hideSell: boolean;
  hideDowngrade: boolean;
  hideBGImage: boolean;
  tooltipsInRightColumn: boolean;
  noConfirm: boolean;
  IWSmelter: boolean;
  disableCMBR: boolean;
  enableRedshift: boolean;
  enableRedshiftGflops: boolean;
  batchSize: number;
  useLegacyTwoInRowLayout: boolean;
  forceLZ: boolean;
  compressSaveFile: boolean;
  disableTelemetry?: boolean;
};

export interface GamePage {
  id: string | null;
  tabs: Array<unknown> | null;
  resPool: ResourceManager | null;
  calendar: Calendar | null;
  bld: null;
  village: null;
  science: null;
  workshop: null;
  diplomacy: null;
  achievements: null;
  console: Console | null;
  telemetry: Telemetry | null;
  server: Server | null;
  math: Math | null;
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
  timer: Timer | null;
  _mainTimer: null;
  karmaKittens: number;
  karmaZebras: number;
  deadKittens: number;
  ironWill: boolean;
  saveVersion: number;
  opts: GameOptions | null;
  gatherTimeoutHandler: null;
  gatherClicks: number;
  cheatMode: boolean;
  systemShockMode: boolean;
  ticks: number;
  totalUpdateTime: Array<number>;
  totalUpdateTimeTicks: number;
  totalUpdateTimeCurrent: number;
  fps: Record<string, unknown> | null;
  pauseTimestamp: number;
  lastDateMessage: null;
  effectsMgr: null;
  managers: Array<unknown> | null;
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
  getEffect(this: this, effectName: string): number;
  updateCaches(this: this): void;
  getLimitedDR(this: this, effect: number, limit: number): unknown;
  msg(this: this, message: string, type?: string, tag?: string, noBullet?: boolean): unknown;
  clearLog(this: this): void;
  saveUI(this: this): void;
  resetState(this: this): void;
  _publish(this: this, topic: string, arg: unknown): void;
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
  decompressLZData(this: this, lzData: string): unknown;
  compressLZData(this: this, json: unknown, useUTF16: boolean): string;
  _parseLSSaveData(this: this): unknown;
  load(this: this): unknown;
  saveExport(this: this): void;
  saveImport(this: this): void;
  saveToFile(this: this, withFullName: boolean): void;
  saveExportDropbox(this: this): void;
  getDropboxAuthUrl(this: this): string;
  exportToDropbox(this: this, lzdata: string, callback: () => void): void;
  saveImportDropbox(this: this): void;
  importFromDropbox(this: this, callback: (msg: string) => void): void;
  saveImportDropboxFileRead(this: this, callback: () => void): void;
  saveImportDropboxText(this: this, lzdata: string, callback: () => void): void;
  _loadSaveJson(this: this, lzdata: string, callback: () => void): void;
  migrateSave(this: this, save: unknown): unknown;
  setUI(this: this, ui: unknown): void;
  render(this: this): void;
  calcResourcePerTick(this: this, resName: string): number;
  addGlobalModToStack<TArray extends Array<unknown>>(
    this: this,
    array: TArray,
    resName: string
  ): TArray;
  getResourcePerTickStack(this: this, resName: string): void;
  getResourcePerDayStack(this: this, resName: string): void;
  getResourceOnYearStack(this: this, resName: string): void;
  getCMBRBonus(this: this): number;
  getCraftRatio(this: this, tag: unknown): number;
  getResCraftRatio(this: this, craftedResName: string): number;
  update(this: this): void;
  getTicksPerSecondUI(this: this): number;
  timeAccelerationRatio(this: this): number;
  updateModel(this: this): void;
  huntAll(this: this, event: Event): void;
  praise(this: this, event: Event): void;
  updateResources(this: this): void;
  getResourcePerTick(this: this, resName: string, withConversion: boolean): number;
  getResourcePerDay(this: this, resName: string): number;
  getResourceOnYearProduction(this: this, resName: string): number;
  getResourcePerTickConvertion(this: this, resName: string): number;
  craft(this: this, resName: string, value: number): void;
  craftAll(this: this, resName: string, value: number): void;
  getRequiredResources(this: this, bld: unknown): unknown;
  attachResourceTooltip(this: this, container: unknown, resRef: unknown): void;
  getDetailedResMap(this: this, res: unknown): string;
  processResourcePerTickStack(
    this: this,
    resStack: unknown,
    res: unknown,
    depth: number,
    hasFixed: boolean
  ): string;
  getStackElemString(this: this, stackElem: unknown): string;
  toDisplaySeconds(this: this, secondsRaw: string): string;
  toDisplayDays(this: this, daysRaw: string): string;
  toDisplayPercentage(
    this: this,
    percentage: number,
    precision: number,
    precisionFixed: boolean
  ): string;
  getDisplayValueExt(
    this: this,
    value: number,
    prefix?: unknown,
    usePerTickHack?: boolean,
    precision?: number,
    postfix?: string
  ): string;
  getDisplayValue(this: this, floatVal: number, plusPrefix: boolean, precision: number): string;
  fixFloatPointNumber(this: this, number: number): number;
  addTab(this: this, tab: unknown): void;
  getTabById(this: this, tabId: string): unknown;
  isWebWorkerSupported(this: this): boolean;
  timestamp(this: this): number;
  start(this: this): void;
  frame(this: this): void;
  tick(this: this): void;
  restartFPSCounters(this: this): void;
  reset(this: this): void;
  resetAutomatic(this: this): void;
  discardParagon(this: this): void;
  _getKarmaKittens(this: this, kittens: number): number;
  _getBonusZebras(this: this): number;
  getResetPrestige(this: this): {
    karmaKittens: number;
    paragonPoints: number;
  };
  _resetInternal(this: this): void;
  reset(this: this, radio: number): void;
  updateKarma(this: this): void;
  getUnlimitedDR(this: this, value: number, stripe: number): number;
  getInverseUnlimitedDR(this: this, value: number, stripe: number): number;
  getTab(this: this, name: string): unknown;
  calculateAllEffects(this: this): void;
  getUnlockByName(this: this, unlockId: string, type: string): unknown;
  lock(this: this, list: unknown): unknown;
  upgrade(this: this, list: unknown): unknown;
  toggleFilters(this: this): unknown;
  registerUndoChange(this: this): UndoChange;
  undo(this: this): void;
  redeemGift(this: this): void;
  unlockAll(this: this): void;
  isEldermass(this: this): void;
  createRandomName(this: this, lenConst: number, charPool: string): string;
  createRandomVarietyAndColor(this: this, ch1: number | null, ch2: number | null): string;
}
