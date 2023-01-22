import { BuildingStackableBtnController, ButtonModern, ButtonModernController, IChildrenAware, IGameAware, tab, TabManager } from "../core";

export interface TimeManager extends TabManager {}
export interface AccelerateTimeBtnController extends ButtonModernController {}
export interface AccelerateTimeBtn extends ButtonModern {}
export interface TimeControlWgt extends IChildrenAware,IGameAware {}
export interface ShatterTCBtnController extends ButtonModernController {}
export interface ShatterTCBtn extends ButtonModern {}
export interface ChronoforgeBtnController extends BuildingStackableBtnController {}
export interface ChronoforgeWgt extends IChildrenAware,IGameAware {}
export interface VoidSpaceBtnController extends BuildingStackableBtnController {}
export interface FixCryochamberBtnController extends ButtonModernController {}
export interface VoidSpaceWgt extends IChildrenAware,IGameAware {}
export interface ResetWgt extends IChildrenAware,IGameAware {}
export interface TimeTab extends tab {}
export interface manager {}
