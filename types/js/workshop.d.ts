import {
  BuildingNotStackableBtnController,
  ButtonModern,
  ButtonModernController,
  tab,
  TabManager,
  TabOptions,
} from "../core";
import { GamePage } from "../game";

export interface WorkshopManager extends TabManager {}
export interface UpgradeButtonController extends BuildingNotStackableBtnController {}
export interface CraftButtonController extends ButtonModernController {}
export interface CraftButton extends ButtonModern {}
export interface ZebraUpgradeButtonController extends BuildingNotStackableBtnController {}
export interface Workshop extends tab {
  constructor(this: this, tabName: TabOptions, game: GamePage): void;
  new (tabName: string, game: GamePage);
}
