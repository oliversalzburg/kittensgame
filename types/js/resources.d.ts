import { TabManager } from "../core";
import { GamePage } from "../game";

export type Resource = {
  name: string;
  title: string;
  type: "common" | "exotic" | "rare" | "uncommon";
  visible?: boolean;
  calculatePerTick?: boolean;
  aiCanDestroy?: boolean;
  craftable?: boolean;
  tag?: "baseMetal" | "chemist" | "metallurgist";
  isNotRefundable?: boolean;
  color?: string;
  display?: boolean;
  transient?: boolean;
  calculateOnYear?: boolean;
  isRefundable?: (game: GamePage) => boolean;
  persists?: boolean;
  calculatePerDay?: boolean;
  description?: string;
  value?: number;
  unlocked?: boolean;
  maxValue?: number;
  perTickCached?: number;
};

export interface ResourceManager extends TabManager {
  resourceData: Array<Resource>;

  resources: Array<Resource> | null;
  village: null;
  game: GamePage | null;

  energyProd: number;
  energyWinterProd: number;
  energyCons: number;

  isLocked: boolean;

  resourceMap?: Record<string, Resource>;

  constructor(this: this): void;
  new ();

  get(this: this, name: string): Resource | false;
  getPseudoResources(this: this): unknown;
  createResource(this: this, name: string): unknown;
  addRes(
    this: this,
    res: Resource,
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
  addResMaxRatios(this: this, res: Resource, maxValue: number): number;
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
  isNormalCraftableResource(this: this, res: Resource): boolean;
}
