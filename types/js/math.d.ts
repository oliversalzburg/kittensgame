export interface Math {
  constructor(this: this): void;
  new ();

  uniformRandomInteger(this: this, min: number, max: number): number;
  standardGaussianRandom(this: this): number;
  irwinHallRandom(this: this, trials: number): number;
  binominalRandomInteger(this: this, trials: number, successProbability: number): number;
  loopOrGaussianApproximation(
    this: this,
    trials: number,
    isDiscrete: boolean,
    mean: number,
    variance: number,
    lowerBound: number,
    upperBound: number,
    baseDistribution: () => number
  ): number;
  log1p(this: this, p: number): number;
}
