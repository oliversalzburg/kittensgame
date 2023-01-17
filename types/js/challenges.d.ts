import { BuildingBtnController, Panel, tab, TabManager } from "../core";

export type Challenges =
  | "1000Years"
  | "anarchy"
  | "atheism"
  | "blackSky"
  | "energy"
  | "ironWill"
  | "pacifism"
  | "postApocalypse"
  | "winterIsComing";

export interface Challenge {
  enabled?: boolean;
  pending?: boolean;
  active?: boolean;
  name: Challenges;
  label: string;
  description: string;
  effectDesc: string;
  researched: boolean;
  unlocked: boolean;
  upgrades?: {
    buildings: ["pasture"];
  };
  effects?: Partial<{
    springCatnipRatio: number;
    summerSolarFarmRatio: number;
    coldChance: number;
    coldHarshness: number;

    masterSkillMultiplier: number;
    kittenLaziness: number;

    energyConsumptionRatio: number;
    energyConsumptionIncrease: number;

    faithSolarRevolutionBoost: number;
    cultureMaxChallenge: number;
    scienceMaxChallenge: number;
    manpowerMaxChallenge: number;
    challengeHappiness: number;

    shatterCostReduction: number;
    shatterCostIncreaseChallenge: number;
    shatterVoidCost: number;
    temporalPressCap: number;

    corruptionBoostRatioChallenge: number;

    alicornPerTickRatio: number;
    tradeKnowledge: number;
    weaponEfficency: number;
    policyFakeBought: number;
    embassyFakeBought: number;
    steamworksFakeBought: number;
    tradeKnowledgeRatio: number;

    arrivalSlowdown: number;
    cryochamberSupport: number;
  }>;
  calculateEffects?(self: Challenge, game: unknown): void;
  checkCompletionCondition?(game: unknown): boolean;
  checkCompletionConditionOnReset?(game: unknown): boolean;
  reserveDelay?: boolean;
  flavor?: string;
  findRuins?(self: Challenge, game: unknown): void;
  actionOnCompletion?(game: unknown): void;
}

export interface ChallengesManager extends TabManager {
  game: unknown;
  reserves: unknown;

  currentChallenge: null;
  challenges: Array<Challenge>;

  constructor(this: this, game: unknown): void;
  new (game: unknown);

  resetState(this: this): void;
  save(this: this, saveData: unknown): void;
  load(this: this, saveData: unknown): void;
  update(this: this): void;

  getChallenge(this: this, name: string): unknown;
  anyChallengeActive(this: this): boolean;
  isActive(this: this, challenge: string): boolean;
  researchChallenge(this: this, challenge: string): void;
  onRunReset(this: this): void;
  applyPending(this: this, isIronWillPending: boolean): void;
}

export interface reserveMan {
  game: unknown;
  reserveResources: null;
  reserveKittens: null;
  reserveCryochambers: number;

  constructor(this: this, game: unknown): void;
  new (game: unknown);

  resetState(this: this): void;
  calculateReserveResources(this: this): void;
  calculateReserveKittens(this: this): void;
  calculateReserves(this: this, isIronWillPending: boolean): void;
  addReserves(this: this): void;

  getSaveData(): unknown;
  reservesExist(): boolean;
}

export interface ChallengeBtnController extends BuildingBtnController {
  new (game: unknown);

  getMetadata(this: this, model: unknown): unknown;
  getDescription(this: this, model: unknown): unknown;
  getName(this: this, model: unknown): unknown;
  updateVisible(this: this, model: unknown): unknown;
  getPrices(this: this, model: unknown): unknown;
  buyItem(this: this, model: unknown, event: unknown, callback: unknown): unknown;
  togglePending(this: this, model: unknown): unknown;
  updateEnabled(this: this, model: unknown): unknown;
}

export interface ChallengePanel extends Panel {
  game: null;

  constructor(this: this): void;
  new (game: unknown);

  render(this: this, container: unknown): void;
}

export interface ChallengesTab extends tab {
  new (game: unknown);

  render(this: this, container: unknown): void;
  update(this: this): void;
}
