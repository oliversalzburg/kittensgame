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
  IChildrenAware,
  IGameAware,
  Panel,
  Spacer,
  tab,
  TabManager,
} from "./core";
import { AutoPath, GetPath } from "./_tools";

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
  declare: DojoDeclare;
  empty: (arg: unknown) => unknown;
};

export type React = {
  createClass: (arg: unknown) => unknown;
};

interface TranslateFunction {
  (literal: string): string;
  (literal: string, args: Array<number | string>): string;
}

declare global {
  const $I: TranslateFunction;
  const classes: ClassesList["classes"];
  const com: ComInterface["com"];
  const dojo: Dojo;
  const gamePage: GamePage;
  const mixin: Mixins["mixin"];
  const React: React;

  interface Window {
    LCstorage:
      | Storage
      | {
          removeItem?: () => void;
        };
  }
}
