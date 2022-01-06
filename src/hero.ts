import { IHero, IHuman } from './hero-interface';

/**
 * Állítsd be helyesen a HumanHero osztályt!
 * Ez az IHuman interfészt implementálja.
 * Neve: HumanHero
 * Deklaráld benne az interfész által megkövetelt változókat.
 * Definiáld a konstruktort és kérj be minden változót, majd állítsd be őket.
 */
export class HumanHero implements IHuman {
    id: number;
    name: string;
    photo?: string;
    sex: string;
    age: number;
    health: number;
    constructor(){
        this.id = 10;
        this.name = 'John Doe';
        this.sex = 'male';
        this.age = 30;
        this.health = 8;
    }
}
