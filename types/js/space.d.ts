import { BuildingStackableBtnController, Panel, tab, TabManager } from "../core";

export interface SpaceManager extends TabManager {}
export interface SpaceProgramBtnController extends BuildingStackableBtnController {}
export interface PlanetBuildingBtnController extends BuildingStackableBtnController {}
export interface PlanetPanel extends Panel {}
export interface FurthestRingPanel extends PlanetPanel {}
export interface SpaceTab extends tab {}
