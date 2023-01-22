import { Panel, tab, TabManager } from "../core";
import { GamePage } from "../game";

export interface Achievement {
  name: string;
  title: string;
  description: string;
  starDescription?: string;
  condition: (this: Achievements) => boolean;
  starCondition?: (this: Achievements) => boolean;
  hidden?: boolean;
  unethical?: boolean;
}

export interface Badge {
  name: string;
  title: string;
  description: string;
  condition?: (this: Achievements) => boolean;
  difficulty?: string;
  unlocked?: boolean;
}

export interface Achievements extends TabManager {
  game: GamePage | null;
  badgesUnlocked: boolean;
  achievements: Array<Achievement>;
  badges: Array<Badge>;

  constructor(this: this, game: GamePage): void;

  get(this: this, name: string): unknown;
  getBadge(this: this, name: string): unknown;
  unlockBadge(this: this, name: string): void;
  hasUnlocked(this: this): boolean;
  update(this: this): boolean;
  resetState(this: this): boolean;
  save(this: this, saveData: unknown): void;
  load(this: this, saveData: unknown): void;
  unlockAll(this: this): boolean;
}

export interface AchievementsPanel extends Panel {
  game: GamePage | null;

  constructor(this: this): void;

  render(this: this): void;
}

export interface BadgesPanel extends Panel {
  game: GamePage | null;

  constructor(this: this): void;

  render(this: this): void;
}

export interface AchTab extends tab {
  constructor(this: this): void;
  new();

  render(this: this, container: unknown): void;
  update(this: this): void;
}
