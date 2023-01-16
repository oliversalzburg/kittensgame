export type ChallengesManager = {
	game: unknown;
	reserves: unknown;

	currentChallenge: null;
	challenges: Array<unknown>;

	constructor: (game: unknown) => void;

	resetState: () => void;
	save: (saveData: unknown) => void;
	load: (saveData: unknown) => void;
	update: () => void;

	getChallenge: (name: string) => unknown;
	anyChallengeActive: () => boolean;
	isActive: (challenge: string) => boolean;
	researchChallenge: (challenge: string) => void;
	onRunReset: () => void;
	applyPending: (isIronWillPending: boolean) => void;
}

