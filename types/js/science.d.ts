import { BuildingNotStackableBtnController, Panel, tab, TabManager } from "../core";
import { GamePage } from "../game";

export interface ScienceManager extends TabManager {}
export interface PolicyBtnController extends BuildingNotStackableBtnController {}
export interface PolicyPanel extends Panel {}
export interface TechButtonController extends BuildingNotStackableBtnController {}
export interface Library extends tab {
	constructor(this: this, tabName: string, game: GamePage): void;
	new (tabName: string, game: GamePage);
}
