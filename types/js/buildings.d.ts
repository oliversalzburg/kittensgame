import {
  BuildingStackableBtn,
  BuildingStackableBtnController,
  ButtonModern,
  ButtonModernController,
  tab,
  TabManager,
} from "../core";

export interface Metadata {
  meta: Record<string, unknown> | null;

  constructor(this: this, meta: Record<string, unknown>): void;

  getMeta(this: this): Record<string, unknown>;
  get(this: this, attr: string): unknown;
  set(this: this, attr: string, value: unknown): unknown;
}

export interface BuildingMeta extends Metadata {
  _metaCache: null;
  _metaCacheStage: null;

  getMeta(this: this): Record<string, unknown>;
  get(this: this, attr: string): unknown;
  set(this: this, attr: string, value: unknown): unknown;
}

export interface BuildingsManager extends TabManager {}
export interface GatherCatnipButtonController extends ButtonModernController {}
export interface RefineCatnipButtonController extends ButtonModernController {}
export interface RefineCatnipButton extends ButtonModern {}
export interface BuildingBtnModernController extends BuildingStackableBtnController {}
export interface StagingBldBtnController extends BuildingBtnModernController {}
export interface StagingBldBtn extends BuildingStackableBtn {}
export interface BuildingsModern extends tab {
  constructor(this: this): void;
  new ();
}
