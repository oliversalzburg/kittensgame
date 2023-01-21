import { BuildingStackableBtnController, ButtonModern, ButtonModernController, Panel, tab } from "../core";

export interface DiplomacyManager {}
export interface RacePanel extends Panel {}
export interface EldersPanel extends RacePanel {}
export interface CrashBcoinButtonController extends ButtonModernController {}
export interface TradeButtonController extends ButtonModernController {}
export interface TradeButton extends ButtonModern {}
export interface EmbassyButtonController extends BuildingStackableBtnController {}
export interface EmbassyButton extends ButtonModern {}
export interface autoPinnedButtonController extends ButtonModernController {}
export interface autoPinnedButton extends ButtonModern {}
export interface SendExplorersButtonController extends ButtonModernController {}
export interface SendExplorersButton extends ButtonModern {}
export interface Diplomacy extends tab {}
