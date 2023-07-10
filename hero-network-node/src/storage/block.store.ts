import { Block } from "../models/block.model";

export class BlockStore {
    private _blocks: Block[];

    constructor() {
        this._blocks = [];
    }

    addBlock(block:Block) {
        this._blocks.push(block);
    }

    getBlockById(id:string): Block | null {
        return this._blocks.find(x => x.id === id) || null;
    }

    removeBlockById(id:string) {
        this._blocks = this._blocks.filter(x => x.id !== id);
    }

    removeBlocksByIds(ids:string[]) {
        this._blocks = this._blocks.filter(x => !ids.includes(x.id));
    }

    get blocks(): Block[] {
        return this._blocks;
    }
}