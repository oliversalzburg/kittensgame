import { GamePage } from "../game";
import { Resource } from "./resources";

export type Season = {
  name: "autumn" | "spring" | "summer" | "winter";
  title: string;
  shortTitle: string;
  modifiers: {
    catnip: number;
  };
};

export type Cycle = {
  name:
    | "cath"
    | "charon"
    | "dune"
    | "helios"
    | "kairo"
    | "piscine"
    | "redmoon"
    | "terminus"
    | "umbra"
    | "yarn";
  title: string;
  glyph: string;
  uglyph: string;
};

export type Charon = Cycle & {
  name: "charon";
  effects: {
    "moonOutpost-unobtainiumPerTickSpace": number;
    "entangler-gflopsConsumption": number;
  };
  festivalEffects: {
    catnip: number;
    wood: number;
    minerals: number;
  };
};

export type Umbra = Cycle & {
  name: "umbra";
  effects: {
    "hydrofracturer-oilPerTickAutoprodSpace": number;
    "planetCracker-uraniumPerTickSpace": number;
    "hrHarvester-energyProduction": number;
  };
  festivalEffects: {
    coal: number;
    iron: number;
    titanium: number;
    gold: number;
  };
};

export type Yarn = Cycle & {
  name: "yarn";
  effects: {
    "hydroponics-catnipRatio": number;
    "researchVessel-starchartPerTickBaseSpace": number;
  };
  festivalEffects: {
    culture: number;
  };
};

export type Helios = Cycle & {
  name: "helios";
  effects: {
    "cryostation-woodMax": number;
    "cryostation-mineralsMax": number;
    "cryostation-coalMax": number;
    "cryostation-ironMax": number;
    "cryostation-titaniumMax": number;
    "cryostation-oilMax": number;
    "cryostation-uraniumMax": number;
    "cryostation-unobtainiumMax": number;
    "sunlifter-energyProduction": number;
  };
  festivalEffects: {
    faith: number;
    unicorns: number;
  };
};

export type Cath = Cycle & {
  name: "cath";
  effects: {
    "spaceStation-scienceRatio": number;
    "sattelite-observatoryRatio": number;
    "sattelite-starchartPerTickBaseSpace": number;
    "spaceBeacon-starchartPerTickBaseSpace": number;
    "spaceElevator-prodTransferBonus": number;
  };
  festivalEffects: {
    manpower: number;
  };
};

export type Redmoon = Cycle & {
  name: "redmoon";
  effects: {
    "moonOutpost-unobtainiumPerTickSpace": number;
    "entangler-gflopsConsumption": number;
  };
  festivalEffects: {
    unobtainium: number;
  };
};

export type Dune = Cycle & {
  name: "dune";
  effects: {
    "hydrofracturer-oilPerTickAutoprodSpace": number;
    "planetCracker-uraniumPerTickSpace": number;
    "hrHarvester-energyProduction": number;
  };
  festivalEffects: {
    uranium: number;
  };
};

export type Piscine = Cycle & {
  name: "piscine";
  effects: {
    "hydroponics-catnipRatio": number;
    "researchVessel-starchartPerTickBaseSpace": number;
  };
  festivalEffects: {
    science: number;
  };
};

export type Terminus = Cycle & {
  name: "terminus";
  effects: {
    "cryostation-woodMax": number;
    "cryostation-mineralsMax": number;
    "cryostation-coalMax": number;
    "cryostation-ironMax": number;
    "cryostation-titaniumMax": number;
    "cryostation-oilMax": number;
    "cryostation-uraniumMax": number;
    "cryostation-unobtainiumMax": number;
    "sunlifter-energyProduction": number;
  };
  festivalEffects: {
    oil: number;
  };
};

export type Kairo = Cycle & {
  name: "kairo";
  effects: {
    "spaceStation-scienceRatio": number;
    "sattelite-observatoryRatio": number;
    "sattelite-starchartPerTickBaseSpace": number;
    "spaceBeacon-starchartPerTickBaseSpace": number;
    "spaceElevator-prodTransferBonus": number;
  };
  festivalEffects: {
    starchart: number;
  };
};

export type Cycles =
  | Cath
  | Charon
  | Dune
  | Helios
  | Kairo
  | Piscine
  | Redmoon
  | Terminus
  | Umbra
  | Yarn;

export interface Calendar {
  game: GamePage | null;

  seasons: Array<Season>;
  cycleYearColors: Array<string>;
  cycles: Array<Cycles>;

  ticksPerDay: number;
  daysPerSeason: number;
  seasonsPerYear: null;
  yearsPerCycle: null;
  cyclesPerEra: null;
  darkFutureBeginning: number;

  season: number;
  cycle: number;
  cycleYear: number;

  day: number;
  year: number;

  eventChance: number;

  weather: null;

  festivalDays: number;

  futureSeasonTemporalParadox: number;

  cryptoPrice: number;

  observeBtn: null;
  observeRemainingTime: number;
  observeClear(this: this): void;
  observeHandler(this: this): void;
  observeTimeout(this: this): void;

  constructor(this: this, game: GamePage, displayElement: HTMLElement): void;
  new (game: GamePage, displayElement: HTMLElement);

  render(this: this): void;
  update(this: this): void;
  cycleYearColor(this: this): unknown;
  cycleEffectsBasics(this: this, effects: unknown, building_name: string): unknown;
  cycleEffectsFestival(this: this, effects: unknown): unknown;
  trueYear(this: this): number;
  darkFutureYears(this: this, withImpedance: boolean): number;
  tick(this: this): void;
  _roundToCentiday(this: this): void;
  onNewDay(this: this): void;
  fastForward(this: this, daysOffset: number): void;
  onNewSeason(this: this): void;
  getMilleniaChanged(this: this, startYear: number, endYear: number): number;
  calculateMilleniumProduction(this: this, milleniums: number): void;
  onNewYears(
    this: this,
    updateUI: boolean,
    years: number,
    milleniumChangeCalculated: boolean
  ): void;
  onNewYear(this: this, updateUI: boolean): void;
  adjustCryptoPrice(this: this): void;
  correctCryptoPrice(this: this): void;
  getWeatherMod(this: this, res: Resource): unknown;
  getCurSeason(this: this): unknown;
  getCurSeasonTitle(this: this): string;
  getCurSeasonTitleShorten(this: this): string;
  getWinterIsComingNumeral(this: this): string;
  resetState(this: this): void;
  save(this: this, saveData: unknown): void;
  load(this: this, saveData: unknown): void;
}

export interface Event {}
