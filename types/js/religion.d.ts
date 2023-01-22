import {
  BuildingStackableBtnController,
  ButtonModern,
  ButtonModernController,
  IChildrenAware,
  IGameAware,
  Panel,
  tab,
  TabManager,
} from "../core";

export interface ReligionManager extends TabManager {}
export interface ZigguratBtnController extends BuildingStackableBtnController {}
export interface ReligionBtnController extends BuildingStackableBtnController {}
export interface TranscendenceBtnController extends BuildingStackableBtnController {}
export interface PraiseBtnController extends ButtonModernController {}
export interface ResetFaithBtnController extends ButtonModernController {}
export interface TranscendBtnController extends ButtonModernController {}
export interface TransformBtnController extends ButtonModernController {}
export interface MultiLinkBtn extends ButtonModern {}
export interface RefineTearsBtnController extends ButtonModernController {}
export interface CryptotheologyWGT extends IChildrenAware, IGameAware {}
export interface CryptotheologyPanel extends Panel {}
export interface PactsWGT extends IChildrenAware, IGameAware {}
export interface PactsPanel extends Panel {}
export interface PactsBtnController extends BuildingStackableBtnController {}
export interface RefineBtn extends ButtonModern {}
export interface pactsManager {}
export interface ReligionTab extends tab {
  constructor(this: this): void;
  new ();
}
