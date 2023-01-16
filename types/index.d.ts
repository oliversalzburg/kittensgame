import { ChallengesManager } from "./challenges";
import { Control, TabManager } from "./core";

export type ClassesList = {
	managers: {
		ChallengesManager: ChallengesManager
	}
}

export type ComInterface = {
	nuclearunicorn: {
		core: {
			Control: Control;
			TabManager: TabManager
		};
	};
};

export type KnownClasses = {
	"classes.managers.ChallengesManager": ChallengesManager;
	"com.nuclearunicorn.core.Control": Control;
	"com.nuclearunicorn.core.TabManager": TabManager;
}

export type KnownClassesNames = keyof KnownClasses;

export type Dojo = {
	declare: <
		TClassName extends KnownClassesNames,
		TBaseClass extends KnownClasses[KnownClassesNames]>
		(name: TClassName, baseClass: TBaseClass, classPrototype: Partial<TBaseClass & KnownClasses[TClassName]>) => void;
	empty: (arg: unknown) => unknown;
}

export type React = {
	createClass: (arg: unknown) => unknown;
}

interface TranslateFunction {
	(literal: string): string;
	(literal: string, translation: string): void;
	(literal: string, translation: string | undefined): void
}

declare global {
	const $I: TranslateFunction;
	const classes: ClassesList;
	const com: ComInterface;
	const dojo: Dojo;
	const React: React;
}