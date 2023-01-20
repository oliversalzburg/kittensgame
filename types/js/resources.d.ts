import { TabManager } from "../core";
import { GamePage } from "../game";

export interface ResourceManager extends TabManager {
  resourceData: Array<unknown>;

  resources: Array<unknown> | null;
  village: null;
  game: GamePage | null;

  energyProd: number;
  energyWinterProd: number;
  energyCons: number;

  isLocked: boolean;

  resourceMap?: Record<string, unknown>;

  constructor(this: this): void;
  new ();

  get(this: this, name: string): unknown;
  getPseudoResources(this: this): unknown;
  createResource(this: this, name: string): unknown;
  addRes(
    this: this,
    res: unknown,
    addedValue?: number,
    allowDuringParadoxes?: boolean,
    preventLimitCheck?: boolean
  ): number;
  addResPerTick(this: this, name: string, value: number): number;
  addResEvent(this: this, name: string, value: number): number;
  getAmtDependsOnStock(this: this, from: string, amt: number): number;
  update(this: this): unknown;
  fastforward(this: this, daysOffset: number): unknown;
  enforceLimits(this: this, limits: unknown): unknown;
  resConsHackForResTable(this: this): unknown;
  addBarnWarehouseRatio(this: this, effects: unknown): unknown;
  addResMaxRatios(this: this, res: unknown, maxValue: number): number;
  setVillage(this: this, village: unknown): void;
  reset(this: this): void;
  resetState(this: this): void;
  save(this: this, saveData: unknown): void;
  load(this: this, saveData: unknown): void;
  hasRes(this: this, prices: unknown, amt: number): boolean;
  isStorageLimited(this: this, prices: unknown): boolean;
  payPrices(this: this, prices: unknown): void;
  maxAll(this: this): void;
  getEnergyDelta(this: this): number;
  getVoidQuantity(this: this): number;
  getVoidQuantityStatistically(this: this): number;
  setDisplayAll(this: this): void;
  toggleLock(this: this): void;
  isNormalCraftableResource(this: this, res: unknown): void;
}
