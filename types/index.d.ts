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
  Console,
  ContentRowRenderer,
  Control,
  IChildrenAware,
  IGameAware,
  Panel,
  Spacer,
  tab,
  TabManager,
} from "./core";
import {
  EffectsManager,
  GamePage,
  IDataStorageAware,
  Server,
  Telemetry,
  Timer,
  UndoChange,
} from "./game";
import { Achievements, AchievementsPanel, AchTab, BadgesPanel } from "./js/achievements";
import {
  BuildingBtnModernController,
  BuildingMeta,
  BuildingsManager,
  BuildingsModern,
  GatherCatnipButtonController,
  Metadata,
  RefineCatnipButton,
  RefineCatnipButtonController,
  StagingBldBtn,
  StagingBldBtnController,
} from "./js/buildings";
import { Calendar, Event } from "./js/calendar";
import {
  ChallengeBtnController,
  ChallengePanel,
  ChallengesManager,
  ChallengesTab,
  reserveMan,
} from "./js/challenges";
import {
  autoPinnedButton,
  autoPinnedButtonController,
  CrashBcoinButtonController,
  Diplomacy,
  DiplomacyManager,
  EldersPanel,
  EmbassyButton,
  EmbassyButtonController,
  RacePanel,
  SendExplorersButton,
  SendExplorersButtonController,
  TradeButton,
  TradeButtonController,
} from "./js/diplomacy";
import { Math } from "./js/math";
import {
  BurnParagonBtnController,
  PrestigeBtnController,
  PrestigeManager,
  PrestigePanel,
  turnHGOffButtonController,
} from "./js/prestige";
import {
  CryptotheologyPanel,
  CryptotheologyWGT,
  MultiLinkBtn,
  PactsBtnController,
  pactsManager,
  PactsPanel,
  PactsWGT,
  PraiseBtnController,
  RefineBtn,
  RefineTearsBtnController,
  ReligionBtnController,
  ReligionManager,
  ReligionTab,
  ResetFaithBtnController,
  TranscendBtnController,
  TranscendenceBtnController,
  TransformBtnController,
  ZigguratBtnController,
} from "./js/religion";
import { ResourceManager } from "./js/resources";
import {
  Library,
  PolicyBtnController,
  PolicyPanel,
  ScienceManager,
  TechButtonController,
} from "./js/science";
import {
  FurthestRingPanel,
  PlanetBuildingBtnController,
  PlanetPanel,
  SpaceManager,
  SpaceProgramBtnController,
  SpaceTab,
} from "./js/space";
import { StatsManager, StatsTab } from "./js/stats";
import { AnyFunction, AutoPath, GetPath } from "./_tools";

export type ClassesList = {
  classes: {
    BuildingMeta: BuildingMeta;
    diplomacy: {
      ui: {
        autoPinnedButton: autoPinnedButton;
        autoPinnedButtonController: autoPinnedButtonController;
        EldersPanel: EldersPanel;
        EmbassyButton: EmbassyButton;
        EmbassyButtonController: EmbassyButtonController;
        RacePanel: RacePanel;
      };
    };
    game: {
      Server: Server;
      Telemetry: Telemetry;
      Timer: Timer;
      ui: {
        GatherCatnipButtonController: GatherCatnipButtonController;
        RefineCatnipButton: RefineCatnipButton;
        RefineCatnipButtonController: RefineCatnipButtonController;
      };
      UndoChange: UndoChange;
    };
    managers: {
      Achievements: Achievements;
      BuildingsManager: BuildingsManager;
      ChallengesManager: ChallengesManager;
      DiplomacyManager: DiplomacyManager;
      PrestigeManager: PrestigeManager;
      ReligionManager: ReligionManager;
      ResourceManager: ResourceManager;
      ScienceManager: ScienceManager;
      SpaceManager: SpaceManager;
      StatsManager: StatsManager;
    };
    Metadata: Metadata;
    religion: {
      pactsManager: pactsManager;
    };
    reserveMan: reserveMan;
    tab: {
      ChallengesTab: ChallengesTab;
      StatsTab: StatsTab;
    };
    trade: {
      ui: {
        SendExplorersButton: SendExplorersButton;
        SendExplorersButtonController: SendExplorersButtonController;
      };
    };
    ui: {
      AchievementsPanel: AchievementsPanel;
      BadgesPanel: BadgesPanel;
      btn: {
        BuildingBtnModernController: BuildingBtnModernController;
        StagingBldBtn: StagingBldBtn;
        StagingBldBtnController: StagingBldBtnController;
      };
      BurnParagonBtnController: BurnParagonBtnController;
      ChallengeBtnController: ChallengeBtnController;
      ChallengePanel: ChallengePanel;
      CryptotheologyPanel: CryptotheologyPanel;
      CryptotheologyWGT: CryptotheologyWGT;
      PactsPanel: PactsPanel;
      PactsWGT: PactsWGT;
      PolicyBtnController: PolicyBtnController;
      PolicyPanel: PolicyPanel;
      PrestigeBtnController: PrestigeBtnController;
      PrestigePanel: PrestigePanel;
      religion: {
        MultiLinkBtn: MultiLinkBtn;
        RefineBtn: RefineBtn;
        RefineTearsBtnController: RefineTearsBtnController;
        TransformBtnController: TransformBtnController;
      };
      space: {
        FurthestRingPanel: FurthestRingPanel;
        PlanetBuildingBtnController: PlanetBuildingBtnController;
        PlanetPanel: PlanetPanel;
      };
      TranscendenceBtnController: TranscendenceBtnController;
      turnHGOffButtonController: turnHGOffButtonController;
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
        Calendar: Calendar;
        calendar: {
          Event: Event;
        };
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
          CrashBcoinButtonController: CrashBcoinButtonController;
          GamePage: GamePage;
          PactsBtnController: PactsBtnController;
          Panel: Panel;
          PraiseBtnController: PraiseBtnController;
          ReligionBtnController: ReligionBtnController;
          ResetFaithBtnController: ResetFaithBtnController;
          Spacer: Spacer;
          SpaceProgramBtnController: SpaceProgramBtnController;
          tab: tab & {
            AchTab: AchTab;
            BuildingsModern: BuildingsModern;
            Diplomacy: Diplomacy;
            Library: Library;
            ReligionTab: ReligionTab;
            SpaceTab: SpaceTab;
          };
          TechButtonController: TechButtonController;
          TradeButton: TradeButton;
          TradeButtonController: TradeButtonController;
          TranscendBtnController: TranscendBtnController;
          ZigguratBtnController: ZigguratBtnController;
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
  connect: (subject: unknown, event: string, bindThis: unknown, callback: () => unknown) => void;
  declare: DojoDeclare;
  destroy: (subject: unknown) => void;
  empty: (arg: unknown) => unknown;
  forEach: <T>(subject: Array<T>, callback: (element: T) => void) => void;
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
