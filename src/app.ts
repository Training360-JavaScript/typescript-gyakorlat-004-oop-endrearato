// Importáld be a HumanHero és TransformerHero osztályokat.
import { HumanHero } from "./hero";
import { TransformerHero } from "./transformer";

/**
 * Állítsd be helyesen a változót!
 * Neve: humans
 * Típusa: HumanHero példányok tömbje.
 * Hozz létre benne 3 HumanHero példányt, szabadon választott adatokkal.
 * @var {HumanHero[]} humans
 */
export const humans: HumanHero[] = [{id: 5, name: 'Jack', sex: 'male', age: 44, health: 97},{id: 6, name: 'Joe', sex: 'male', age: 33, health: 90},{id: 7, name: 'Jane', sex: 'female', age: 30, health: 98}];

/**
 * Állítsd be helyesen a változót!
 * Neve: transformers
 * Típusa: TransformerHero példányok tömbje.
 * Hozz létre benne 3 TransformerHero példányt, szabadon választott adatokkal.
 * @var {TransformerHero[]} transformers
 */
export const transformers: TransformerHero[] = [{id: 1, name: 'Jack', wings: 2, wheels: 4, clan: 'good'}, {id: 2, name: 'James', wings: 3, wheels: 6, clan: 'bad'}, {id: 3, name: 'Oliver', wings: 4, wheels: 8, clan: 'uggly'}];
