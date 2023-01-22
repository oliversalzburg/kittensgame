import {
  BuildingStackableBtnController,
  ButtonModern,
  ButtonModernController,
  IChildrenAware,
  IGameAware,
  Panel,
  tab,
  TabManager,
  TabOptions,
} from "../core";
import { GamePage } from "../game";

export interface VillageManager extends TabManager {
  new (game: GamePage);
}
export interface Kitten {}
export interface Map {}
export interface BiomeBtnController extends ButtonModernController {}
export interface BiomeBtn extends ButtonModern {}
export interface UpgradeHQController extends BuildingStackableBtnController {}
export interface UpgradeExplorersController extends BuildingStackableBtnController {}
export interface MapOverviewWgt extends IChildrenAware, IGameAware {}
export interface KittenSim {}
export interface JobButtonController extends ButtonModernController {}
export interface JobButton extends ButtonModern {}
export interface Census {}
export interface CensusPanel extends Panel {}
export interface VillageButtonController extends ButtonModernController {}
export interface FestivalButtonController extends VillageButtonController {}
export interface FestivalButton extends ButtonModern {}
export interface Village extends tab {
  constructor(this: this, tabName: TabOptions, game: GamePage): void;
  new (tabName: string, game: GamePage);
}
