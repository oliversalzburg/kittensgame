import { Panel, SaveData, tab, TabManager } from "../core";
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
  unlocked?: boolean;
  starUnlocked?: boolean;
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
  getBadge(this: this, name: string): Badge;
  unlockBadge(this: this, name: string): void;
  hasUnlocked(this: this): boolean;
  update(this: this): void;
  resetState(this: this): void;
  save(this: this, saveData: SaveData): void;
  load(this: this, saveData: SaveData): void;
  unlockAll(this: this): void;
}

export interface AchievementsPanel extends Panel {
  game: GamePage | null;

  constructor(this: this): void;
  new ();

  render(this: this, container: HTMLElement): HTMLElement;
}

export interface BadgesPanel extends Panel {
  game: GamePage | null;

  constructor(this: this): void;

  render(this: this, container: HTMLElement): HTMLElement;
}

export interface AchTab extends tab {
  achievementsPanel?: AchievementsPanel;
  badgesPanel?: BadgesPanel;
  container?: HTMLElement;

  constructor(this: this): void;
  new ();

  render(this: this, container: HTMLElement): HTMLElement;
  update(this: this): void;
}
