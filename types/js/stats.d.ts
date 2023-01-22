import { tab, TabManager } from "../core";
import { GamePage } from "../game";

export interface Stat {
  name:
    | "kittensDead"
    | "totalKittens"
    | "totalYears"
    | "totalResets"
    | "totalParagon"
    | "eventsObserved"
    | "buildingsConstructed"
    | "totalCrafts"
    | "timePlayed"
    | "averageKittens"
    | "totalTrades"
    | "averageKittens"
    | "totalClicks"
    | "unicornsSacrificed";
  title: string;
  val: number;
  unlocked?: boolean;
  defaultUnlocked?: boolean;
  calculate?: (game: GamePage) => number | string;
}

export interface StatsManager extends TabManager {
  game: GamePage | null;
  stats: Array<Stat>;
  statsCurrent: Array<Stat>;
  statGroups: Array<{ group: Array<Stat>; title: string }> | null;

  resetState(this: this): void;
  save(this: this, saveData: unknown): void;
  load(this: this, saveData: unknown): void;
  getStat(this: this, name: string): void;
  getStatCurrent(this: this, name: string): void;
  resetStatsCurrent(this: this): void;
  unlockAll(this: this): void;
}

export interface StatsTab extends tab {
  container: HTMLElement;

  constructor(this: this): void;
  new ();

  render(this: this, content: HTMLElement):void;
  update(this: this):void;
	
}
