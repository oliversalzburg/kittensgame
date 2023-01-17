import { ChallengeBtnController, ChallengesManager, reserveMan } from "./js/challenges";
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
    managers: {
      ChallengesManager: ChallengesManager;
    };
    reserveMan: reserveMan;
    ui: {
      ChallengeBtnController: ChallengeBtnController;
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
          Spacer: Spacer;
          ContentRowRenderer: ContentRowRenderer;
          Panel: Panel;
          tab: tab;
        };
      };
    };
  };
};

export type Mixins = {
  mixin: {
    IGameAware: IGameAware;
    IChildrenAware: IChildrenAware;
  };
};

type Classes = ClassesList & ComInterface & Mixins;

interface DojoDeclare {
  <TClassName extends string>(
    name: AutoPath<Classes, TClassName>,
    baseClass: unknown,
    classPrototype: Partial<GetPath<Classes, TClassName>>
  ): void;
  <TClassName extends string>(
    name: AutoPath<Classes, TClassName>,
    baseClasses: Array<unknown>,
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
