import { BuildingBtnController, TabManager } from "../core";

export interface ChallengesManager extends TabManager {
  game: unknown;
  reserves: unknown;

  currentChallenge: null;
  challenges: Array<unknown>;

  constructor(this: this, game: unknown): void;

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

  resetState(this: this): void;
  calculateReserveResources(this: this): void;
  calculateReserveKittens(this: this): void;
  calculateReserves(this: this, isIronWillPending: boolean): void;
  addReserves(this: this): void;

  getSaveData(): unknown;
  reservesExist(): boolean;
}

export interface ChallengeBtnController extends BuildingBtnController {
  getMetadata(this: this, model: unknown): unknown;
}
