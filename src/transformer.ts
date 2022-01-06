import { ITransformer } from './hero-interface';

/**
 * Állítsd be helyesen a TransformerHero osztályt!
 * Ez az ITransformer interfészt implementálja.
 * Neve: TransformerHero
 * Deklaráld benne az interfész által megkövetelt változókat.
 * Definiáld a konstruktort és kérj be minden változót, majd állítsd be őket.
 */
export class TransformerHero implements ITransformer{
    id: number;
    name: string;
    photo?: string;
    wings: number;
    wheels: number;
    clan: string;    
    constructor(){
        this.id = 10;
        this.name = 'Jane Doe';
        this.wings = 2;
        this.wheels = 4;
        this.clan = 'csonttörő';
    }
}
