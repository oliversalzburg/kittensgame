import { tab, TabManager } from "../core";

export interface StatsManager extends TabManager {}
export interface StatsTab extends tab {
  constructor(this: this);
  new ();
}
