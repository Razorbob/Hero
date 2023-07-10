import { Transaction } from "./transaction.model";

export interface Block{
    
}

export class Block{
    public id: string;
    public timestamp: number;
    public lastBlock: string;
    public transactions: Transaction[];

    constructor(unconfirmedTransactions: Transaction[], lastBlockId: string){
        
        this.timestamp = new Date().getTime();
        this.lastBlock = lastBlockId;

        this.transactions = this.chooseTransactions(unconfirmedTransactions);
        this.id = this.createId(this.transactions);
    }

    createId(transactions: Transaction[]): string{
        return ""
    }

    chooseTransactions(unconfirmedTransactions: Transaction[]): Transaction[]{
        // TODO: Implement a transaction choosing algorithm to choose transactions for the Block
        // in PoW, we would just use the x highest fee transactions, increase a nounce until we find a hash that satisfies the difficulty
        // in PoS, we would use the x highest fee transactions, and then choose a random stakeholder to sign the block
        // in PoA, we would use the x highest fee transactions, and then send it to an trusted Authority to sign the block aka Bullshit Consensus

        // Maybe just do something simple like choose the first 10 transactions and call it a day, for now...
        const result: Transaction[] = [];

        return [];
    }
}