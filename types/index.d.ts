import { Math } from "./js/math";
import { ResourceManager } from "./js/resources";
import {
  EffectsManager,
  GamePage,
  IDataStorageAware,
  Server,
  Telemetry,
  Timer,
  UndoChange,
} from "./game";
import {
  ChallengeBtnController,
  ChallengePanel,
  ChallengesManager,
  ChallengesTab,
  reserveMan,
} from "./js/challenges";
import {
  BuildingBtn,
  BuildingBtnController,
  BuildingNotStackableBtnController,
  BuildingResearchBtn,
  BuildingStackableBtn,
  BuildingStackableBtnController,
  Button,
  ButtonController,
  ButtonModern,
  ButtonModernController,
  ContentRowRenderer,
  Control,
  Console,
  IChildrenAware,
  IGameAware,
  Panel,
  Spacer,
  tab,
  TabManager,
} from "./core";
import { AnyFunction, AutoPath, GetPath } from "./_tools";

export type ClassesList = {
  classes: {
    game: {
      Server: Server;
      Telemetry: Telemetry;
      Timer: Timer;
      UndoChange: UndoChange;
    };
    managers: {
      ChallengesManager: ChallengesManager;
      ResourceManager: ResourceManager;
    };
    reserveMan: reserveMan;
    tab: {
      ChallengesTab: ChallengesTab;
    };
    ui: {
      ChallengeBtnController: ChallengeBtnController;
      ChallengePanel: ChallengePanel;
    };
  };
};

export type ComInterface = {
  com: {
    nuclearunicorn: {
      core: {
        Control: Control;
        TabManager: TabManager;
      };
      game: {
        EffectsManager: EffectsManager;
        log: {
          Console: Console;
        };
        Math: Math;
        ui: {
          ButtonController: ButtonController;
          Button: Button;
          ButtonModernController: ButtonModernController;
          ButtonModern: ButtonModern;
          BuildingBtnController: BuildingBtnController;
          BuildingBtn: BuildingBtn;
          BuildingStackableBtnController: BuildingStackableBtnController;
          BuildingStackableBtn: BuildingStackableBtn;
          BuildingNotStackableBtnController: BuildingNotStackableBtnController;
          BuildingResearchBtn: BuildingResearchBtn;
          ContentRowRenderer: ContentRowRenderer;
          GamePage: GamePage;
          Panel: Panel;
          Spacer: Spacer;
          tab: tab;
        };
      };
    };
  };
};

export type Mixins = {
  mixin: {
    IChildrenAware: IChildrenAware;
    IDataStorageAware: IDataStorageAware;
    IGameAware: IGameAware;
  };
};

type Classes = ClassesList & ComInterface & Mixins;

interface DojoDeclare {
  <TClassName extends string>(
    name: AutoPath<Classes, TClassName>,
    baseClass: unknown,
    classPrototype: Partial<GetPath<Classes, TClassName>>
  ): void;
}

export type Dojo = {
  version: {
    minor: number;
  };
  byId: (id: string) => HTMLElement;
  clone: <TSubject>(subject: TSubject) => TSubject;
  declare: DojoDeclare;
  empty: (arg: unknown) => unknown;
  hitch: <TFunction>(bindThis: unknown, bindMethod: TFunction) => TFunction;
  publish: (topic: string, arg: Array<unknown> | unknown) => void;
  style: (element: HTMLElement, attribute: string, value: string) => void;
  subscribe: (event: string, handler: AnyFunction) => void;
};

export interface NewRelicInteraction {
  save(): void;
}
export interface NewRelic {
  addRelease(id: string, version: string): void;
  setCustomAttribute(id: string, value: string): void;
  setErrorHandler(handler: (err: Error) => boolean): void;
  addPageAction(type: string, payload: unknown): void;
  setCurrentRouteName(route: string): void;
  interaction(): NewRelicInteraction;
}

export type React = {
  createClass: (arg: unknown) => unknown;
};

interface TranslateFunction {
  (literal: string): string;
  (literal: string, args: Array<number | string>): string;
}

export type LCstorage =
  | Storage
  | {
      removeItem?: () => void;
    };

declare global {
  const $I: TranslateFunction;
  const classes: ClassesList["classes"];
  const com: ComInterface["com"];
  const dojo: Dojo;
  const gamePage: GamePage;
  const LCstorage: LCstorage;
  const mixin: Mixins["mixin"];
  const React: React;

  interface Window {
    newrelic?: NewRelic;
    LCstorage: LCstorage;
  }
}
