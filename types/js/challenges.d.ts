import { TabManager } from "../core";

export interface ChallengesManager extends TabManager {
	game: unknown;
	reserves: unknown;

	currentChallenge: null;
	challenges: Array<unknown>;

	constructor(this: this, game: unknown): void;

	resetState(this: this): void;
	save(this: this, saveData: unknown): void;
	load(this: this, saveData: unknown): void;
	update(this: this): void;

	getChallenge(this: this, name: string): unknown;
	anyChallengeActive(this: this): boolean;
	isActive(this: this, challenge: string): boolean;
	researchChallenge(this: this, challenge: string): void;
	onRunReset(this: this): void;
	applyPending(this: this, isIronWillPending: boolean): void;
}
